import React from 'react'

function Login() {
    return (
        <div>



		
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

					<button href="#" class="login__button">Sign In</button>

					<div>
						<span class="login__account">Don't have an Account ?</span>
						<span class="login__signin" id="sign-up">Sign Up</span>
					</div>
				</form>
            
        </div>
    )
}

export default Login
