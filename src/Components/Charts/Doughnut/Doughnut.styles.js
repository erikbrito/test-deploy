import styled, { css } from 'styled-components'

export const LabelChart = styled.div`
  width: 1.2em;
  height: 1em;
  border-radius: 4px;
  margin-right: 0.5em;
  ${({ color }) => css`background: ${color};`}
`

export const WrapperLegends = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperDoughnut = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  margin-top: 0;
`