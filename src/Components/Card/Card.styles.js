import styled, { css } from 'styled-components'

export const Canvas = styled.div`
  background: white;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  width: auto;
  height: auto;
  margin: 1em;
  border-radius: 14px;
`

export const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 12em;
  height: 11em;
  margin: 1em 2em 0 0;
  border-radius: 20px;
  padding: 0.5em;
  ${({ color }) => css`
    background: ${color};
  `}
  &:first-child {
    margin-left: 2em;
  }
`

export const Icon = styled.div`
  width: 2.5em;
  height: 2.5em;
  float: right;
  border-radius: 50%;
  margin: 0.5em;
  color: white;
  ${({ color }) => css`background: ${color};`}

  .mdi{
    position: relative;
    width: 25px;
    height: 25px;
    top: 7px;
    left: 7px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ justify }) => css`
    justify-content: ${justify};
    margin: 1.2em ;
  `}
`

export const SubCardWrapper = styled.div`
  display: flex;
`

export const Percents = styled.div`
  background: aliceblue;
  width: 3.5em;
  text-align: center;
  border: 1px solid #a7c2db;
  border-radius: 5px;
`