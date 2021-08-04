import React from 'react'
import Particles from 'react-particles-js';

function Hero() {
    
    return (
        <>
        <div id="particle-div">
        
        <Particles 
          params={{
            detectRetina: true,
            background: {
              color: {
                value: "#000",
              },
            },
            height:"300px",
            fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
            particles: {
              color: {
                value: "#fffff8",
              },
              links: {
                color: "rgb(85, 50, 211)",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                }
              },
            },
          }}
        />
        </div>
        
        <br/>
        </>
    )
}



export default Hero

