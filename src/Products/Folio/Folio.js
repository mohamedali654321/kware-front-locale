import React from "react";
import FlipCard from "./components/FlipCard";
import Slice from "./components/Slice";
import styled from "styled-components";
import TimeLine from "./components/TimeLine";

function Folio() {
  const Apps=["translation","users","inventory","inventory ES" , "check in ","check out", "agreements","circulation log" ,"courses","data import","data export","dashboard"
  ,"codex search","eHoldings"]
  return (
    <Container>
      <Wrapper>
        <FlipCard />
        <Inner>
        <SliceWrapper>
        {
          Apps.map(app =>(
            
            <Slice title={app} />
           
            
          ))
        }
          
       
        </SliceWrapper>
       
        <Second>
        
            <p>Okapi</p>
        </Second>
          <Content>
           <Text> sdasfsadfsdfsdfsdf </Text>

          </Content>
        <Footer>
      
        <i class="fas fa-database"></i>
        <i class="fas fa-database"></i>
        <i class="fas fa-database"></i>
        <i class="fas fa-database"></i>
        </Footer>
        </Inner>
      </Wrapper>
    </Container>
  );
}

export default Folio;

const Container = styled.div`
  position: relative;
  margin-top: 170px;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
 padding: 10px;
  gap: 30px;
  @media (min-width: 992px) {
    margin-top: 96px;
    flex-direction: row-reverse;
   
  }
  
`;

const SliceWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;

overflow-x: auto;
&::-webkit-scrollbar{
  width: 0;
}

@media (min-width: 992px) {
  overflow-x: hidden;

  
  }

`;


const Inner=styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  @media (min-width: 992px) {
  overflow: inherit;

  
  }
`;
const Second=styled.div`
overflow: hidden;
font-family: 'Effra-ar';
position: relative;
max-width: 980px;
width: 100%;
display: flex;
flex-direction: row;
background-color: tomato;
margin-top: 30px;
font-size: 30px;
height: 50px;
justify-content: center;
text-align: center;
align-items: center;
padding: 5px;
color: #fff;

`;


const Footer=styled.div`

position: relative;
max-width: 980px;
width: 100%;
display: flex;
flex-direction: row;
gap: 30px;
margin-top: 120px;
font-size: 30px;
height: 50px;
justify-content: center;
text-align: center;
align-items: center;
border: 1px solid rgba(0,0,0.1);
padding: 5px;
color: tomato;
@media (min-width: 992px) {
 

  justify-content: flex-start;
  }

`;


const Content =styled.div`
display: flex;
flex-direction: row;

gap: 38px;
width: 100%;
padding: 20px;
position: relative;

`;



const Text=styled.p`
width: 100%;
position: relative;
font-size: 17px;
font-weight: 600;
color: #000;



`;