import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { WrapperDoughnut, LabelChart, WrapperLegends } from './Doughnut.styles'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: [
    '62% New',
    '13% Returning',
    '23% Inactive'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ]
  }]
}

const options = {
  plugins: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    legend: {
      display: false,
      position: 'left',
      labels: {
        boxWidth: 20,
      }
    }
  },
  layout: {
    padding: {
      left: 80
    }
  }
}

const DoughnutChart = () => {

  let ArrayLegends = []

  const legends = () => {
    for (let elem in data.datasets[0].backgroundColor){
      ArrayLegends.push(
        <WrapperLegends key={data.labels[elem]}>
          <LabelChart color={data.datasets[0].backgroundColor[elem]} />
          <p> {data.labels[elem]} </p>
        </WrapperLegends>
      )
    }
    return ArrayLegends
  }

  return (
    <WrapperDoughnut>
      <div>
        { legends() }
      </div>
      <div style={{ height: 250, width: 250 }}>
        <Doughnut data={data} options={options} />
      </div>
    </WrapperDoughnut>
  )
}

export default DoughnutChart
