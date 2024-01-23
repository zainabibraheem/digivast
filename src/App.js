import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import servicesData from "./components/servicesdata";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import {browserRouter, Routes, Route, Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'

import './App.css'

const servicesDetails = servicesData.map((item) => {
  return (
    <Services
       key = {item.id}
       title= {item.title}
       img={item.img}
       description ={item.description}
    />
  )
})



function App() {
  return (

    <div className="App"> 
        <Navbar/>
        <Home/>
        <Zoom><About/></Zoom>
        <section className="services-section">
          {servicesDetails}
        </section>
        <Reviews/>
        <Footer/>
      </div>
  );
}

export default App;
