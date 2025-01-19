import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
      <>
          <h1>home</h1>
          <Link to='header' element={<Header></Header>}></Link>
      </>
  )
}

export default Home