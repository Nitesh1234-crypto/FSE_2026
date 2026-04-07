import React from 'react'

const Child = (props) => {
    let name = props.name;
    let count = props.count;
    // name="Ritik"; //dont do this
  return (
    <div>
      <h1>Name is {name}</h1>
      <h3>count is {count}</h3>
    </div>
  )
}

export default Child
