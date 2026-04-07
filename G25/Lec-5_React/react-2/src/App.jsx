import React from 'react'
import Head from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'
import { Main } from './component/headerComponent/Header'
import { sum } from './component/headerComponent/Header'
const App = () => {
  let result = sum(10,5)
  return (
    <div>
      <Head name="Nitesh" age="24" address="delhi"></Head>
      <h1>Hello world</h1>
      <Main name="Ritik"></Main>
      {/* <h3>result is {result}</h3> */}
      <Footer result={result}></Footer>
    </div>
  )
}

export default App
