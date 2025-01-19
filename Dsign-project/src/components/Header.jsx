import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/Images/logo.svg"
import Main from './Main'
import Service from './Service'
import Service2 from './Service2'
import Map from './Map'
import Client from './Client'
import Footer from './Footer'
import Stats from './Stats'
const Header = () => {
  return (
      <>
          <header className='flex justify-between px-20 pt-10 items-center '>
             <div className=''>
              <Link to='/'><img src={logo} alt="logo"></img> </Link>
          </div>
          <div className=''>
              <ul className='flex gap-7 text-1xl'>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                       <Link to='/'>Services</Link>
                  </li>
                  <li>
                       <Link to='/'>About</Link>
                  </li>
                  <li>
                       <Link to='/'>Projects</Link>
                  </li>
                  <li>
                       <Link to='/'>Help</Link>
                  </li>
              </ul>
          </div>
          <div className='flex gap-5 text-[#0075FF]'> 
              <button>Sign In</button>
              <button className='bg-[#DAEBFF] px-12 py-4 rounded-bl-[120px] rounded-r-[80px] hover:bg-sky-300' >Sign up</button>
          </div> 
          </header>
          <Main></Main>
          <Stats></Stats>
          <Service></Service>
          <Service2></Service2>
          <Map></Map>
          <Client></Client>
          <Footer></Footer>
      </>
  )
}

export default Header