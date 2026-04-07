import React from 'react'

function Child2(props) {
    //data value provide kro
  return (
    <div>
      <h1>Child 2</h1>
      {props.data && <h4>data from child 1 is {props.data}</h4>}
    </div>
  )
}

export default Child2
