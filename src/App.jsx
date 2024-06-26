import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'
import WeatherCard from './components/WeatherCard'
import './App.css'
const App = () => {
  const [weatherdetails,setweatherdetails]=useState(null);
  // console.log(weatherdetails);
  return (
    <div className='app'>
      <div className="container">
      <Header />
      <Search setweatherdetails={setweatherdetails} />
      <div id='loading'></div>
      {weatherdetails &&  <WeatherCard weatherdetails={weatherdetails} />}
      <Footer />
      </div> 
    </div>
  )
}

export default App