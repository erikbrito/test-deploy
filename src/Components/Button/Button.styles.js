import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
  width: 13em;
  height: 3.5em;
  border-radius: 8px;
  margin: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  color: #737791;
  padding: 1em;
  cursor: pointer;

  &:hover {
    background-color: #acadff;
    color: white;
  }

  ${({ active }) => active && css`
    background-color: #5D5FEF;
    color: white;

    &:hover {
      background-color: #5D5FEF;
      color: white;
    }
  `}

  ${({ signout }) => signout && css`
    color: #8D1C1C;

    p {
      margin: 0 1em;
    }

    &:hover {
      background: #8D1C1C;
      color: white;
  `}

  ${({ outline }) => outline && css`
    background: none;
    border: 2px solid black;
    display: flex;
    justify-content: space-evenly;
  `}

  p {
    margin: 0 1em;
  }

  .MuiSvgIcon-root, .injected-svg {
    width: 26px;
    height: 26px;
  }
`