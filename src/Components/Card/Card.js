import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

import Button from '../Button/Button.js'
import { Canvas, SubCard, CardWrapper, HeaderCard, SubCardWrapper, Icon, Percents } from './Card.styles'

import Export from '../../Assets/Export.svg'
import Order from '../../Assets/Order.svg'
import Mark from '../../Assets/Mark.svg'
import InsertChartSharpIcon from '@material-ui/icons/InsertChartSharp'


import DoughnutChart from '../Charts/Doughnut/Doughnut.js'
import BarChart from '../Charts/BarChart/BarChart.js'
import LineChart from '../Charts/LineChart/LineChart'

import axios from '../../Services/index.js'

const Card = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('users').then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <CardWrapper>
        <Canvas>
          <HeaderCard>
            <div style={{ margin: '1em' }}>
              <h3> Today's Sales </h3>
              <p> Sales Summery </p>
            </div>
            
            <Button icon={<ReactSVG src={Export} />} title='Export' outline='true'/>
          </HeaderCard>


          <SubCardWrapper>
            <SubCard color='#FFE2E5'>
              <Icon color='#FA5A7D'> <InsertChartSharpIcon className='mdi'/> </Icon>

              <h3> $1k </h3>
              <p>Total Sales</p>
              <p style={{color: '#4079ED'}}>+8% from yesterday</p>
            </SubCard>

            <SubCard color='#FFF4DE'>
              <Icon color='#FF947A'> <ReactSVG src={Order} className='mdi'/> </Icon>

              <h3> $1k </h3>
              <p>Total Sales</p>
              <p style={{color: '#4079ED'}}>+8% from yesterday</p>
            </SubCard>

            <SubCard color='#DCFCE7'>
              <Icon color='#3CD856'> <ReactSVG src={Mark} className='mdi' style={{ top: 9, left: 11 }} /> </Icon>

              <h3> $1k </h3>
              <p>Total Sales</p>
              <p style={{color: '#4079ED'}}>+8% from yesterday</p>
            </SubCard>
          </SubCardWrapper>
        </Canvas>

        <Canvas>
          <HeaderCard justify='initial'>
            <div>
              <h3> Users </h3>
              <p> 4,209 </p>
            </div>
          </HeaderCard>

          <DoughnutChart />
        </Canvas>
        
        <Canvas>
          <HeaderCard justify='initial'>
            <div style={{ margin: '1em' }}>
              <h3> Target Vs Reality </h3>
            </div>
          </HeaderCard>

          <BarChart />
        </Canvas>

        <Canvas>
          <HeaderCard justify='initial'>
            <div>
              <h3> Customer Satisfaction </h3>
            </div>
          </HeaderCard>

          <LineChart />
        </Canvas>
        
        <Canvas>
          <HeaderCard justify='initial'>
            <div>
              <h2> Top Sellers </h2>
            </div>
          </HeaderCard>
          
          <table style={{ width: '75em' }} id="customers">

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Sales</th>
              </tr>
            </thead>

            <tbody>

            { 
              data.map(value => 
                <tr key={value.id}>
                  <td> {value.id} </td>
                  <td> {value.name} </td>
                  <td>
                    <progress id="file" value="45" max="100"> 42% </progress>
                  </td>
                  <td><Percents> {Math.floor(Math.random() * (100 - 1 + 1) + 1)}% </Percents></td>
                </tr>
              )
            }

            </tbody>

          </table>

        </Canvas>
        
      </CardWrapper>
    </div>
  )
}

export default Card
