import React from 'react'
import styled from 'styled-components'
function Button(props) {
    return (
        
     <SubmitButton type="submit" onClick={props.onClick}>{props.value}</SubmitButton>
        
    )
}

export default Button

const SubmitButton=styled.button`
 display: block;
  padding: 1rem;
  margin: 2rem 0;
  background-color: #9D4BFF;
  color: #FFF;
  font-weight: 600;
  text-align: center;
  border-radius: .5rem;
  transition: .3s;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover{
  background-color: #23004D;
}

`;