import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';



const Chart = () =>{


  let [chartData, setChartData] = useState([]);
  let [dates, setDates] = useState([]);

  useEffect(()=>{
    async function getChart(){
      let response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30');
      let {cases, recovered, deaths} = await response.json();
      let c = Object.values(cases).map((val)=>val)
      let r = Object.values(recovered).map((val)=>val)
      let d = Object.values(deaths).map((val)=>val)
      setChartData([c,r,d]);
      let date = Object.keys(cases).map((val)=>val);
      setDates(date)
    };
    getChart();
  },[]);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'CASES',
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        borderWidth: 1,
        data:chartData[0],
      },
      {
          label: 'RECOVERED',
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          borderWidth: 1,
          data: chartData[1],
        },
        {
          label: 'DEATHS',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          data: chartData[2],
        }
    ]
  };


    return (
      <div>
      <h2 style = {{textAlign:'center',color:'#333',marginTop:'20px'}}>LAST 30 DAYS</h2>
        <Bar
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
};

export default Chart;