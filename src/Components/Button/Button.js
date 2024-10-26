import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({ icon, title, active, signout, outline, onClick }) => {
  return (
    <ButtonStyled 
      name={title} 
      active={active} 
      signout={signout} 
      outline={outline}
      onClick={onClick}
    >
      { icon } <p> { title } </p>
    </ButtonStyled>
  )
}

export default Button
