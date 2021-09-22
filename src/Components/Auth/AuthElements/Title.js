import React from 'react'
import styled from 'styled-components'
export default function Title(props) {
    return (
        <Label>{props.title}</Label>
    )
}


const Label=styled.h1`
font-size: 1.5rem;
  margin-bottom: 2rem;
`;