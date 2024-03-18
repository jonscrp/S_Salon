
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import Booking from './pages/Booking'
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer'
import { useState, useEffect } from 'react';



function App() {
  /*
  const [data, setData] = useState("Unknown");

  // fetching data from our api and setting it to data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:9000/testAPI');
      const data = await response.json();
      //console.log(data['test']);
      const test = data['test'];
      //console.log(test);
      setData(test);
    }
    //setTimeout(fetchData, 5000);
    fetchData();
  })
  */

  return (
    <div className='app'>
     
      <BrowserRouter>
        <NavBar></NavBar>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
