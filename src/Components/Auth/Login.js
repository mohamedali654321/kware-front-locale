import React,{useState} from 'react'
import styled from 'styled-components';
import Button from "./AuthElements/Button";
import Input from "./AuthElements/Input";
import Title from "./AuthElements/Title";
import {Link,useHistory} from 'react-router-dom'

function Login() {

  const [identifier,setIdentifier]=useState("");
  const [password,setPassword]=useState("");
  const endPoint = 'http://54.220.211.123:1335/auth/local';
  const history=useHistory();
  const[error,setError]=useState('');
  const formSubmit=(e)=>{
    e.preventDefault();
    

}


const login = async()=>{
  
  
  try {
      const{jwt,user}= await fetch(endPoint,{
          method:"POST",
          headers:{'Content-Type':'Application/json'},
          body:JSON.stringify({
              identifier,
              password

          })
      }).then(res=>{
          if(res.status!==200)
          {
              throw new Error('Wrong Login Check Username and Password');
          }
          history.push('/');
         return res.json();
         
          
      }
      
      )
      console.log({jwt,user})
      window.sessionStorage.setItem("jwt" ,jwt);
      window.sessionStorage.setItem("user" , JSON.parse(user));
      
  } catch (e) {
      setError(e.toString());
      
  }
 
 

}

    return (
        <Container>
      <Wrapper>
        <ImgWrapper>
          <img src="./images/signup-1.png" alt="" />
        </ImgWrapper>

        <FormWrapper>
          <Form onSubmit={formSubmit} >
            <Title title="Create Account" />

            <Input
              type="test"
              placeholder="Username or E-mail"
              icon="bx bx-user login__icon"
              onChange={(e) => setIdentifier(e.target.value)}
              value={identifier}
            />

          

            <Input
              type="password"
              placeholder="Password"
              icon="bx bx-lock-alt login__icon"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              
            />

              <ForgotLink href="#">Forgot password?</ForgotLink>

            <Button type="submit"  onClick={login} value="Sign In" />

            <Text>Don't have an Account ?</Text>
            <Link to="/register">Sign Up</Link>

           
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
    )
}

export default Login



const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
  }
`;

const ImgWrapper = styled.div`
  justify-self: center;
  img {
    width: 310px;
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 600px;
    height: 588px;
    background-color: #f2f2f2;
    border-radius: 1rem;
    padding-left: 1rem;

    img {
      width: 390px;
      margin-top: 0;
    }
  }
`;

const FormWrapper = styled.div`
  position: relative;
  height: 368px;

  @media screen and (min-width: 576px) {
    width: 348px;
    justify-self: center;
  }
`;



const Form = styled.form`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  background-color: #f2f2f2;
  padding: 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  animation-duration: 0.4s;
  animation-name: animate-login;

  @media screen and (min-width: 1024px) {
    left: -11rem;
    right: -11rem;
    bottom: -5.5rem;
  }

  @keyframes animate-login {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }


  a{
    font-weight: 600;
  font-size: 0.813rem;
  color: #9d4bff;
  cursor: pointer;
  text-decoration: none;
  }
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  color: #23004d;
`;




const ForgotLink=styled.a`
display: block;
  width: max-content;
  margin-left: auto;
  margin-top: .5rem;
  font-size: .813rem;
  font-weight: 600;
  color: #A49EAC;

`;