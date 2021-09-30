import React,{useState} from 'react'
import styled from 'styled-components';
import PartnersHeader from '../Review/components/PartnersHeader';
import Clients from './Clients';
import { FormattedMessage, useIntl } from "react-intl";
export default function ClientPage() {
    const intl = useIntl();
    return (
        <Container>
        <Wrapper>
          
        <PartnersHeader title={intl.formatMessage({id:"navbar.links.ourClients"})} />
  
          <Clients/>
  
        
  
      
        </Wrapper>
      </Container>
    )
}




const Container = styled.div`
  margin-top: 84px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  padding-top: 30px;
`;
const Wrapper=styled.div`
 position: relative;
    width: 100%;
   
    margin-left: auto;
    margin-right: auto;

`;