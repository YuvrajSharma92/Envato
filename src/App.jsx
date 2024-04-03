
import React from 'react'
import Home from './Components/Home/Home'
import Causes from './Components/extra/Causes'
import Events from './Components/extra/Events'
import Blog from './Components/extra/Blog'
import Pages from './Components/extra/Pages'
import PortFolio from './Components/extra/PortFolio'
import NavBar from './NavBar'
import Footer from './Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route exact path ="/" element ={<Home/>}/>
      <Route exact path ="/causes" element ={<Causes/>}/>
      <Route exact path ="/events" element ={<Events/>}/>
      <Route exact path ="/blog" element ={<Blog/>}/>
      <Route exact path ="/pages" element ={<Pages/>}/> 
      <Route exact path = "/protfolio" element ={<PortFolio/>}/>
    </Routes>
   </BrowserRouter>
   <Footer/>
    </>
  )
}
