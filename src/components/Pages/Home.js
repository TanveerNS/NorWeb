import React, { Component } from "react";
import Hero from '../Section/Hero';
import Services from '../Section/Services';
import Products from '../Section/Products';
import Game from '../Section/Game';
import Footer from '../Section/Footer';  

 
class Home extends Component {
  constructor(){
    super();
    
  }
  
  render() {
    return (
      <div>
        <Hero />
        <Services />
        <Products />
        <Game />
        <Footer />
        
      </div>
    );
  }
}
 
export default Home;