import React ,{useEffect} from 'react'
import './Auth.css'
import Login from './Login/Login';
import Register from './Register/Register';


function Auth() {
  



    useEffect(()=>{

const signUp = document.getElementById('sign-up');
const  signIn = document.getElementById('sign-in');
const   loginIn = document.getElementById('login-in');
const   loginUp = document.getElementById('login-up');
  
  
        signUp.addEventListener('click', ()=>{
			// Remove classes first if they exist
			loginIn.classList.remove('block')
			loginUp.classList.remove('none')
		
			// Add classes
			loginIn.classList.toggle('none')
			loginUp.classList.toggle('block')
		})
		
		signIn.addEventListener('click', ()=>{
			// Remove classes first if they exist
			loginIn.classList.remove('none')
			loginUp.classList.remove('block')
		
			// Add classes
			loginIn.classList.toggle('block')
			loginUp.classList.toggle('none')
		})
		
        
        
    },[])
    


   
    return (

		<div class="login">
		<div class="login__content">
			<div class="login__img">
				<img src="./images/signup-1.png" alt=""/>
			</div>

			<div class="login__forms">
				<Login/>

				<Register/>
			</div>
		</div>
	</div>
        
    )
}

export default Auth
