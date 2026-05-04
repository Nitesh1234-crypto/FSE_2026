import React, { useEffect, useState } from 'react'
import {Link,Routes,Route,useNavigate} from "react-router-dom"
import { useRef } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase"

function Protected({children,user,loading}){
  // let navigate = useNavigate()
  if(loading){
    return <h1>Loading .....</h1>
  }
  // useEffect(()=>{
  //     if(!user){
  //    navigate("/login");
  //    return;
  //   }else{
  //       return children;
  //   }
  // },[user])
  if(!user) return;
  return children;

  


}
const App = () => {
  let [user,setUser] = useState(null);
  let [loading,setLoading] = useState(true);
 
 useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    console.log(user);
    setUser(user);
    setLoading(false);
  })
 },[])
  
  
  
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={
          <Protected user={user} loading={loading}>
            <Dashboard></Dashboard>
          </Protected>
          }
          ></Route>
      </Routes>
   
    </div>
  )
}
function HeaderComponent(){
  return(
    <>
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </header>
    </>
  )
}
function Home(){
  return(
    <>
    <HeaderComponent></HeaderComponent>
    <h1>Firebase project</h1>
    </>
  )
}
function Dashboard(){
  return(
    <>
    <HeaderComponent></HeaderComponent>
    <h1>Dashboard page</h1>
    </>
  )
}
function Register(){
  let emailRef = useRef();
  let passwordRef=useRef();
  async function registerHandler(){
    try {
      let email= emailRef.current.value;
    let password = passwordRef.current.value;
    let userCredential=await createUserWithEmailAndPassword(auth,email,password) //firebase function
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
    

  }
  return(
    <>
    <HeaderComponent></HeaderComponent>
      <input ref={emailRef} type="text" placeholder='email' />
      <input ref={passwordRef} type="text" placeholder='password' />
      <button onClick={registerHandler}>Register</button>
      <p>Already have an account please <Link to="/login">SignIn</Link></p>
    </>
  )
}
function Login(){
  let emailRef = useRef();
  let passwordRef=useRef();
  async function loginHandler(){
    let email= emailRef.current.value;
    let password = passwordRef.current.value;
    let userCredential=await signInWithEmailAndPassword(auth,email,password)
    console.log(userCredential.user);
  }
 
  return(
    <>
    <HeaderComponent></HeaderComponent>
      <input ref={emailRef} type="text" placeholder='email' />
      <input ref={passwordRef} type="text" placeholder='password' />
      <button onClick={loginHandler}>Login</button>
      <p>Dont have an account please <Link to="/register">Signup</Link></p>
    </>
  )
}


export default App
