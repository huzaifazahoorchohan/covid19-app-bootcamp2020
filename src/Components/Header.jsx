import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { api } from '../API/Api';

const Header = () => {
    let [countries, setCountries] = useState([]);

    useEffect(()=>{
        async function getData(){
            const response = await fetch(api/countries);
            let countryNames = await response.json();
            console.log(countryNames)
        }
        getData();
    },[])

    return(
        <div className = 'container-fluid' style = {{backgroundColor:'#34495E',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div className = 'header' >
            <h1 style = {{color:'#ECF0F1',lineHeight:'70px',fontSize:'25px'}} >COVID-19 | TRACKER</h1>
            <FormControl className = "app_dropdown">
                <Select variant = "outlined">
                </Select>
            </FormControl>
            </div>
        </div>
    )
};

export default Header;