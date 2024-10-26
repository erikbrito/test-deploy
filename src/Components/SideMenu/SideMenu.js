import React, { useState } from 'react'
import Button from '../Button/Button.js'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

import { SidebarMenu, DummyLogo, Icon, GroupButtons } from './SideMenu.styles'

import Dummy from '../../Assets/dummy.svg'
import Graph from '../../Assets/Graph.svg'
import Chart from '../../Assets/Chart_Line.svg'
import Sign_Out from '../../Assets/Sign_Out.svg'
import { ReactSVG } from 'react-svg'

import styled from 'styled-components'

const LogoSVG = styled(ReactSVG)`
  position: relative;
  width: 25px;
  height: 25px;
  top: 7px;
  left: 7px;
`

const titleButton = [
  {'icon': <ReactSVG src={Graph} />, 'title': 'Dashboard', 'active': 'active'}, 
  {'icon': <EqualizerOutlinedIcon />, 'title': 'Leaderboard', 'active': ''}, 
  {'icon': <ShoppingCartIcon />, 'title': 'Order', 'active': ''}, 
  {'icon': <LocalMallOutlinedIcon />, 'title': 'Products', 'active': ''}, 
  {'icon': <ReactSVG src={Chart} />, 'title': 'Sales Report', 'active': ''}, 
  {'icon': <SmsOutlinedIcon />, 'title': 'Messages', 'active': ''}, 
  {'icon': <SettingsOutlinedIcon />, 'title': 'Settings', 'active': ''}
]

const SideMenu = () => {
  const [activeButton, setActiveButton] = useState(0)
  
  const handleClick = (i) => {
    setActiveButton(i)
  }

  return (
    <SidebarMenu>
      <DummyLogo>
        <Icon> <LogoSVG src={Dummy} /> </Icon>
        <h3> Site </h3>
      </DummyLogo>

      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <GroupButtons>
          {
            titleButton.map((obj, index) => 
            <Button 
              key={index}
              name={obj.title} 
              icon={obj.icon} 
              title={obj.title} 
              active={activeButton === index}
              onClick={() => handleClick(index)}
            />)
          }
        </GroupButtons>
        <Button icon={<ReactSVG src={Sign_Out} />} title='Sign Out' signout='true' />
      </div>

    </SidebarMenu>
  )
}

export default SideMenu
