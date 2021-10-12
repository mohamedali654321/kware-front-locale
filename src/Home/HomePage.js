import React from "react";
import "./HomePage.css";
import HomeHero from "./Page/HomeHero/HomeHero";
import Logo from "./Page/Logo/Logo";
import Feature from "./Page/Feature/Feature";
import SixthSection from "./Page/SixthSection/SixthSection";
import Review from "./Page/Review/Review";
import Steps from "./Page/Steps/Steps";
import Clients from "./Page/Clients/Clients";
import ClientPage from "./Page/Clients/ClientPage";

function HomePage() {
  // console.log(window.sessionStorage.getItem('jwt'))
  return (
    <div>
      <div class="homeContainer">
        <div class="homeWrapper">
          <section>
            <HomeHero />

            <div>
              {/* <Logo/> */}

              {/* <Feature /> */}
              <Steps />

              <SixthSection />
            <ClientPage/>

              <Review />
              
              <Feature />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
