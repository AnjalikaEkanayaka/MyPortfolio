import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App