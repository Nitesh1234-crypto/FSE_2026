import React from 'react'
import "./Header.css"
const Header = (props) => {
    console.log(props);
  return (
    <div>
      <h1 className='title'>Header</h1>
      <h5>Name is {props.name}</h5>
      <h5>age is {props.age}</h5>
      <h5>address is {props.address}</h5>
    </div>
  )
}
export function Main(props){
    console.log(props)
    return(
        <div>
            <h1>Main</h1>
            <h5>Name is {props.name}</h5>
        </div>
    )
}
export function sum(a,b){
    return a+b
}

// export default Main;
// export default sum;

export default Header
