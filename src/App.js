import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import servicesData from "./components/servicesdata";
import Reviews from "./components/reviews";

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
        <About/>
        <section className="services-section">
          {servicesDetails}
        </section>
        <Reviews/>
      </div>
  );
}

export default App;
