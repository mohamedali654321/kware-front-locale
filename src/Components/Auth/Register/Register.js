import React from 'react'

function Register() {
    return (
       
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

					<button href="#" class="login__button">Sign Up</button>

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
            
        
    )
}

export default Register
