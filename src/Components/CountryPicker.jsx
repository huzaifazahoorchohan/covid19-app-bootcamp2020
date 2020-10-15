import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Chart from './Chart';
const url = 'https://disease.sh/v3/covid-19/countries';

const CountryPicker = () =>{
    let [countries, setCountries] = useState([]);
    let [countryName, setCountryName] = useState('global');
    let [countryValue, setCountryValue] = useState({});


    useEffect(()=>{
        async function wholeData(){
        let response = await fetch('https://disease.sh/v3/covid-19/all')
        let data = await response.json();
        setCountryValue(data);
        };
        wholeData();
    },[])

    useEffect(()=>{
        async function getCountries(){
            let response = await fetch(url);
            let data = await response.json();
            setCountries(data);
        };
        getCountries();
    },[]);


    const onCountryChange = async (event) =>{
        let countryValue = event.target.value;
        setCountryName(countryValue)

        const url = countryValue === 'global' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryValue}`;
       let newResponse =  await fetch (url);
       let newData = await newResponse.json();
       setCountryValue(newData)
    };

    return(
        <div className = 'countryBox'>
            <select value = {countryName}  onChange = {onCountryChange}>
                <option value = 'global'>Global</option>
                {countries.map((country,i)=>{
                    return <option key = {i} value = {country.country} >{country.country}</option>
                })}
            </select>
            <Cards confirm = {countryValue.cases} recover = {countryValue.recovered} deaths = {countryValue.deaths} />
            <Chart />
        </div>
    )
};

export default CountryPicker;