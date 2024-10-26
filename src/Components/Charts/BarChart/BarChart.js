import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { LabelChart } from './BarChart.styles'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  plugins: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    }
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      }
    },
    y: {
      ticks: {
        display: false
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      }
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      data: [ 403, 724, 281, 544, 354, 654, 387 ],
      backgroundColor: '#4AB58E',
    },
    {
      data: [ 403, 724, 281, 544, 354, 654, 387 ],
      backgroundColor: '#FFCF00',
    },
  ],
}

const BarChart = () => {
  return (
    <div>
      <div style={{ height: 325, width: 655, marginLeft: '3em', marginRight: '3em' }}>
        <Bar options={options} data={data} />
      </div>
      <div style={{ margin: '2em' }}>
        <div style={{ display: 'flex' }}>
          <LabelChart color={'#4AB58E'}/>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4> Reality Sales </h4>
              <p> Global </p>

            </div>
              <p style={{ fontWeight: 400, color: '#4AB58E' }}> 8,888 </p>
          </div>
        </div>
        
        <div style={{ display: 'flex' }}>
          <LabelChart color={'#FFCF00'}/>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4> Target Sales </h4>
              <p> Commercial </p>

            </div>
              <p style={{ fontWeight: 400, color: '#FFCF00' }}> 10,000 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarChart
