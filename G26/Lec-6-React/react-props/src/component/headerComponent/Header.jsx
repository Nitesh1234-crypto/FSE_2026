import React from 'react'
import "./Header.css"
const Header = (props) => {
    console.log(props)
  return (
    <div>
      <h1 className='header'>Header</h1>
      <h4>Name:{props.name}</h4>
      <h4>Age:{props.age}</h4>
      <p>Address:{props.address}</p>
      <h6>sum of 10 and 5 is :{props.result} </h6>
    </div>
  )
}
//named export
export function sum(a,b){
    return a+b;
}
export function multiple(a,b){
    return a*b;
}

// export default sum;
// export default multiple;
export default Header;
