import React from 'react'
import Head from './component/headerComponent/Header';
import { sum} from './component/headerComponent/Header';
import { multiple } from './component/headerComponent/Header';
const App = () => {
  // console.log(summ)
  let a=10;
  let b=5;
  let result= sum(a,b);
  
  return (
    <div>
      <Head name="Nitesh" result={result} age="20" address="ambala city"></Head>
      <h1>Hello world</h1>
      {/* <Footer></Footer> */}
    </div>
  )
}


export default App
