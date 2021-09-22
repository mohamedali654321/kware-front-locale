import React from 'react'
import styled from 'styled-components'
function Input(props) {
    return (
        <Wrapper>
        <i className={props.icon}></i>
          <InputForm type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </Wrapper>
    )
}

export default Input


const Wrapper=styled.div`
display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: .5rem;
  padding: 1.125rem 1rem;
  background-color: #FFF;
  margin-top: 1rem;
  border-radius: .5rem;

  i{
    font-size: 1.5rem;
    color:#9D4BFF
  }
`;

const InputForm=styled.input`
 border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  color: #23004D;

  &::placeholder{
  font-size: 1rem;
  font-family: 'Effra-ar';
  color: #A49EAC;
}

`;