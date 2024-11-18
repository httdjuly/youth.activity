import React from 'react';
// import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
  datasets: [
    {
      label: 'UV',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    },
    {
      label: 'PV',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(192,75,192,0.4)',
      borderColor: 'rgba(192,75,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(192,75,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(192,75,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
    },
  ],
};

const options = {
  canvasId: '2',
  scales: {
    x: {
      type: 'category',
    },
  },
};


export function LineChartActivity() {
  //return <Line data={data} options={options} />
}
