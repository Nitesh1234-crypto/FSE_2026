import React from 'react'
import {Routes,Route,BrowserRouter, Link, useParams} from 'react-router'
function App() {
return(
  <>
  <header>
    {/* <a></a> */}
    <ul><li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li> <Link to="/users/1">user 1</Link></li>
    <li><Link to="/users/2">user 2</Link></li></ul>
    
    
   
    
  </header>
 
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
           
            <Route path='/users/:id' element={<User></User>}></Route>
             {/* <Route path='/users/1' element={<About></About>}></Route> */}
             <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Routes >
      
  </>
)
      
  
}

function Home(props){
  return(
    <>
      <h1>Home page</h1>
    </>
  )

}
function About(props){
  return(
    <>
      <h1>About page</h1>
    </>
  )

}
function User(){
  let {id}=useParams()
  return(
    <>
      <h1>user no {id}</h1>
    </>
  )
}
function PageNotFound(){
  return(
    <>
    <h1>Page not found</h1>
    </>
  )
}

export default App
