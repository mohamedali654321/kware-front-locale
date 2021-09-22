import React ,{useEffect,useState} from "react";
import styled from "styled-components";
import Button from "./AuthElements/Button";
import Input from "./AuthElements/Input";
import Title from "./AuthElements/Title";
import {Link,useHistory} from 'react-router-dom'

function Register() {
  const [username,setuserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState()
  const [error ,setError]=useState('');
  const history=useHistory();
  const endPoint = 'http://54.220.211.123:1335/auth/local/register';
    const formSubmit=(e)=>{
        e.preventDefault();
        

    }









  const register = async() => {

    
    try {
        const {jwt,user}=await fetch(endPoint,{
            method:"POST",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify({
              username,
                email,
                password
            })
        }).then(res=>{
            
           if(res.status !== 200 && password!== confirmPassword)
            {
                throw new Error('Password not matching ');
                
            }
            if(res.status !==200 && !username || !email ||!password)
            {
                throw new Error('Fill All Feilds ');
            }
            history.push('/login')
           
               return res.json();
                
               
                

            
        }
            );

            console.log({jwt,user})
                window.localStorage.setItem("jwt" ,jwt);
                window.localStorage.setItem("user" , JSON.stringify(user));
                
        
        
    } catch (e) {
        setError(e.toString())
        
    }
   
     
    
  
}




  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <img src="./images/signup-1.png" alt="" />
        </ImgWrapper>

        <FormWrapper>
          <Form onSubmit={formSubmit}  >
            <Title title="Create Account" />

            <Input
              type="test"
              placeholder="Username"
              icon="bx bx-user login__icon"
              onChange={(e) => setuserName(e.target.value)}
              value={username}
            />

            <Input
              type="email"
              placeholder="Email"
              icon="bx bx-at login__icon"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              type="password"
              placeholder="Password"
              icon="bx bx-lock-alt login__icon"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Input
              type="password"
              placeholder="Confirm-Password"
              icon="bx bx-lock-alt login__icon"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />

            <Button  onClick={register}  value="Sign Up" />
            
            <Text>Already have an Account ?</Text>
            <Link to="/login">Sign In</Link>

            <SocialContainer>
              <a style={{fontSize:"1.5rem",color: "#23004d" ,margin:"0 1.5rem"}} href="#">
                <i class="bx bxl-facebook"></i>
              </a>
              <a style={{fontSize:"1.5rem",color: "#23004d" ,margin:"0 1.5rem"}} href="#">
                <i class="bx bxl-twitter"></i>
              </a>
              <a style={{fontSize:"1.5rem",color: "#23004d" ,margin:"0 1.5rem"}}>
                <i class="bx bxl-google"></i>
              </a>
            </SocialContainer>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

export default Register;

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

const SocialContainer = styled.div`
  margin-top: 2rem;

  a {
    font-size: 1.5rem  ;
    color: #23004d;
    margin: 0 1.5rem;
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

const SignInLink = styled.a`
  font-weight: 600;
  font-size: 0.813rem;
  color: #9d4bff;
  cursor: pointer;
  text-decoration: none;
`;



