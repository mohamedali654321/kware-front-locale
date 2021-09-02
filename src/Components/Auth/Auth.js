import React ,{useEffect} from 'react'
import './Auth.css'


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
				<form action="" class="login__registre" id="login-in">
					<h1 class="login__title">Sign In</h1>

					<div class="login__box">
						<i class='bx bx-user login__icon'></i>
						<input type="text" placeholder="Username" class="login__input"/>
					</div>

					<div class="login__box">
						<i class='bx bx-lock-alt login__icon'></i>
						<input type="password" placeholder="Password" class="login__input"/>
					</div>

					<a href="#" class="login__forgot">Forgot password?</a>

					<a href="#" class="login__button">Sign In</a>

					<div>
						<span class="login__account">Don't have an Account ?</span>
						<span class="login__signin" id="sign-up">Sign Up</span>
					</div>
				</form>

				<form action="" class="login__create none" id="login-up">
					<h1 class="login__title">Create Account</h1>

					<div class="login__box">
						<i class='bx bx-user login__icon'></i>
						<input type="text" placeholder="Username" class="login__input"/>
					</div>

					<div class="login__box">
						<i class='bx bx-at login__icon'></i>
						<input type="text" placeholder="Email" class="login__input"/>
					</div>

					<div class="login__box">
						<i class='bx bx-lock-alt login__icon'></i>
						<input type="password" placeholder="Password" class="login__input"/>
					</div>
					<div class="login__box">
						<i class='bx bx-lock-alt login__icon'></i>
						<input type="password" placeholder="Confirm-Password" class="login__input"/>
					</div>

					<a href="#" class="login__button">Sign Up</a>

					<div>
						<span class="login__account">Already have an Account ?</span>
						<span class="login__signup" id="sign-in">Sign In</span>
					</div>

					<div class="login__social">
						<a href="#" class="login__social-icon"><i class='bx bxl-facebook' ></i></a>
						<a href="#" class="login__social-icon"><i class='bx bxl-twitter' ></i></a>
						<a href="#" class="login__social-icon"><i class='bx bxl-google' ></i></a>
					</div>
				</form>
			</div>
		</div>
	</div>
        
    )
}

export default Auth
