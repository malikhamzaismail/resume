import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          
        <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                  console.log(typewriter);
                    typewriter
                        .typeString("I'm a Frontend Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm a Backend Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm a React Js Developer")
                        // .pauseFor(1000)
                        
                        .start();
                        

                }}
            />
        </div>

          {/* <h1>Hamza Ismail</h1>
          <p>I'm Designer 
                        <br /> Developer 
                        <br />Freelancer<span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default Hero;
