import React ,{useEffect} from 'react'
import './Auth.css'


function Auth() {
  
	let container = document.getElementById('container')

	const  toggle = () => {
		  container.classList.toggle('sign-in')
		  container.classList.toggle('sign-up')
  
	  }
  

    useEffect(()=>{
  
          setTimeout(() => {
              container.classList.add('sign-in')
          }, 200)
           
        
        
    })
    


   
    return (

        <div id="container" class="container">
		
		<div class="row">
			
			<div class="col align-items-center flex-col sign-up">
				<div class="form-wrapper align-items-center">
					<div class="form sign-up">
						<div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" placeholder="Username"/>
						</div>
						<div class="input-group">
							<i class='bx bx-mail-send'></i>
							<input type="email" placeholder="Email"/>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" placeholder="Password"/>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" placeholder="Confirm password"/>
						</div>
						<button>
							Sign up
						</button>
						<p>
							<span>
								Already have an account?
							</span>
							<b onclick={()=>{toggle()}} class="pointer">
								Sign in here
							</b>
						</p>
					</div>
				</div>
				<div class="form-wrapper">
					<div class="social-list align-items-center sign-up">
						<div class="align-items-center facebook-bg">
							<i class='bx bxl-facebook'></i>
						</div>
						<div class="align-items-center google-bg">
							<i class='bx bxl-google'></i>
						</div>
						<div class="align-items-center twitter-bg">
							<i class='bx bxl-twitter'></i>
						</div>
						<div class="align-items-center insta-bg">
							<i class='bx bxl-instagram-alt'></i>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col align-items-center flex-col sign-in">
				<div class="form-wrapper align-items-center">
					<div class="form sign-in">
						<div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" placeholder="Username"/>
						</div>
						<div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" placeholder="Password"/>
						</div>
						<button>
							Sign in
						</button>
						<p>
							<b>
								Forgot password?
							</b>
						</p>
						<p>
							<span>
								Don't have an account?
							</span>
							<b onclick={()=>{toggle()}} class="pointer">
								Sign up here
							</b>
						</p>
					</div>
				</div>
				<div class="form-wrapper">
					<div class="social-list align-items-center sign-in">
						<div class="align-items-center facebook-bg">
							<i class='bx bxl-facebook'></i>
						</div>
						<div class="align-items-center google-bg">
							<i class='bx bxl-google'></i>
						</div>
						<div class="align-items-center twitter-bg">
							<i class='bx bxl-twitter'></i>
						</div>
						<div class="align-items-center insta-bg">
							<i class='bx bxl-instagram-alt'></i>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	
		<div class="row content-row">
			
			<div class="col align-items-center flex-col">
				<div class="text sign-in">
					<h2>
						Welcome back
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati, accusantium
						molestias, laborum, aspernatur deserunt officia voluptatum tempora dicta quo ab ullam. Assumenda
						enim harum minima possimus dignissimos deserunt rem.
					</p>
				</div>
				<div class="img sign-in">
					<img src="assets/undraw_different_love_a3rg.svg" alt="welcome"/>
				</div>
			</div>
			
			<div class="col align-items-center flex-col">
				<div class="img sign-up">
					<img src="assets/undraw_creative_team_r90h.svg" alt="welcome"/>
				</div>
				<div class="text sign-up">
					<h2>
						Join with us
					</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati, accusantium
						molestias, laborum, aspernatur deserunt officia voluptatum tempora dicta quo ab ullam. Assumenda
						enim harum minima possimus dignissimos deserunt rem.
					</p>
				</div>
			</div>
			
		</div>
		
	</div>
        
    )
}

export default Auth
