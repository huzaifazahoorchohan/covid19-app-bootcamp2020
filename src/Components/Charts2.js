import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'TOTAL',
      backgroundColor: 'lightgray',
      borderColor: 'gray',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40, 53, 98, 32, 102, 83]
    },
    {
        label: 'CONFIRMED',
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 53, 98, 32, 102, 83]
      },
      {
        label: 'RECOVERD',
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 53, 98, 32, 102, 83]
      },
      {
        label: 'DEATHS',
        backgroundColor: 'lightpink',
        borderColor: 'pink',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 53, 98, 32, 102, 83]
      },
  ]
};

const Charts2 = () =>{
  return(
      <div>
        <h2 style = {{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Track covid19 via months</h2>
        <Bar
          data={data}
          width={100}
          height={224}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
};

export default Charts2;