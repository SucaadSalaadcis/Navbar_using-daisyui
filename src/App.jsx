import React from 'react'
import Navbar from './Navbar'
import Banner from './Diff'
import CountDown from './CountDown'
import Chat from './Chat'
import './App.css'
import Carousel from './Carousel'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <CountDown/>
      <Chat/>
      <Carousel/>
    
    </div>
  )
}

export default App