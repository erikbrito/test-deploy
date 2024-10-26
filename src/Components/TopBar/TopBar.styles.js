import styled from 'styled-components'
// import styled, { css } from 'styled-components'

export const Header = styled.div`
  width: 100%;
  height: 4em;
  float: right;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  margin-left: 1em;
`

export const GroupMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 4em;
  width: 8em;

  p {
    font-weight: 200;
    font-size: small;
  }
`

export const Icon = styled.div`
  width: 2.5em;
  height: 2.5em;
  float: right;
  background: #FFFAF1;
  border-radius: 8px;
`