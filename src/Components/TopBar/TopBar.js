import React from 'react'
import { Header, Title, Icon, GroupMenu } from './TopBar.styles'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Notification from '../../Assets/Notification.svg'


const AlertSVG = styled(ReactSVG)`
  position: relative;
  width: 25px;
  height: 25px;
  top: 7px;
  left: 7px;
  color: #FFA412;
`

const TopBar = () => {
  return (
    <Header>
      <Title> Dashboard </Title>

      <GroupMenu>
        <Icon> <AlertSVG src={Notification} /> </Icon>
        <div style={{ display: 'flex' }}>
          <div>
            <h4> User </h4>
            <p> Admin </p>
          </div>
          <KeyboardArrowDownIcon style={{ fontSize: 'larger', marginTop: '3px' }} />
        </div>
      </GroupMenu>
    </Header>
  )
}

export default TopBar
