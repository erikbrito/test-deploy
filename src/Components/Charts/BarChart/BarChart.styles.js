import styled, { css } from 'styled-components'

export const WrapperLegends = styled.div`
  display: flex;
  align-items: center;
`

export const LabelChart = styled.div`
  width: 1.2em;
  height: 1em;
  border-radius: 4px;
  margin-top: 1em;
  margin-right: 4em;
  ${({ color }) => css`background: ${color};`}
`