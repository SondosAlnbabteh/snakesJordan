// ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const generateNDays = (n) => {
  const data = [];
  for(let i=0; i<n; i++) {
    const date = new Date();
    date.setDate(date.getDate()-i);
    data.push(date.toLocaleString('en-US', { month: 'short', day: 'numeric' }));
  }
  return data;
};

const generateRandomData = (n) => {
  return Array.from({ length: n }, () => Math.round(Math.random() * 10));
};

const ChartComponent = () => {
  const data = {
    labels: generateNDays(7),
    datasets: [
      {
        label: 'Active',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgb(59 130 246 / .05)',
        tension: .2,
      },
      {
        label: 'Completed',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgb(16 185 129 / .05)',
        tension: .2,
      },
      {
        label: 'Canceled',
        data: generateRandomData(7),
        borderWidth: 1,
        fill: true,
        pointBackgroundColor: 'rgb(244, 63, 94)',
        borderColor: 'rgb(244, 63, 94)',
        backgroundColor: 'rgb(244 63 94 / .05)',
        tension: .2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Line data={data} options={options} />
  );
};

export default ChartComponent;
