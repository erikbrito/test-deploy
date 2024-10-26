import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js"
import { ReactSVG } from 'react-svg'

import Legend_Blue from '../../../Assets/Legend_Blue.svg'
import Legend_Green from '../../../Assets/Legend_Green.svg'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        display: false
      },
      grid: {
        display: false
      }
    }
  }
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [ 43, 74, 21, 54, 84, 54, 87 ],
      borderColor: "#07E098",
      backgroundColor: "#07E098",
      fill: {
        target: "origin",
        above: "#a2eed587"
      }
    },
    {
      label: "Dataset 2",
      data: [ 33, 24, 81, 44, 35, 64, 38 ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      fill: "origin"
    }
  ]
}

const LineChart = () => {
  return (
    <>
      <div style={{ height: 260, width: 390, margin: '0.8em' }}>
        <Line options={options} data={data} />
      </div>

      <div style={{ width: '20em', borderBottom: '2px solid black', margin: '0 auto'}} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'center', marginTop: '2em' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ display: 'flex'}}>
            <ReactSVG src={Legend_Blue} style={{ marginRight: '1em'}}/> <p>  Last Month </p>
          </div>
          <p style={{ fontWeight: 400 }}> $3,004 </p>
        </div>
        <div style={{ width: '2px', height: '2em',borderRight: '2px solid black' }}/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ display: 'flex'}}>
            <ReactSVG src={Legend_Green} style={{ marginRight: '1em'}}/> <p> This Month </p>
          </div>
          <p style={{ fontWeight: 400 }}> $4,504 </p>
        </div>
      </div>
    </>
  )
}

export default LineChart