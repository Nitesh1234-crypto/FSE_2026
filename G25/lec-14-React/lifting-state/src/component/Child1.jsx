import React from 'react'

function Child1(props) {
    let getData= props.getData;
    let data =10;
    function sendData(){
        getData(data)
    }
  return (
    <div>
      <h1>child 1</h1>
      <button onClick={sendData}>Click</button>
    </div>
  )
}

export default Child1
