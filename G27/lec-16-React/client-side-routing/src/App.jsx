import React from 'react'
import {BrowserRouter,Route,Routes,Link, useParams} from "react-router-dom"
function App() {
  return (
    <div>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}
      {/* <a href="/">Home</a>
      <a href="/about">about</a> */}
     
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/profile/:name' element={<Profile></Profile>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    

    </div>
  )
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}
function Profile(){
  let {name} = useParams();
  return(
    <div>
      <h1>Profile page of {name}</h1>
    </div>
  )
}
function PageNotFound(){
  return(
    <>
    <h1>page not found</h1>
    </>
  )
}

export default App
