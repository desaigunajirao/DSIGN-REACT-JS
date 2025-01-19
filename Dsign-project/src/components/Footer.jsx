import React from 'react'
import logo from "../../public/Images/logo.png"
import facebook from "../../public/Images/facebook.png"
import twitter from "../../public/Images/twitter.png"
import instagram from "../../public/Images/instagram.png"
import { Link } from 'react-router-dom'
import logo1 from "../../public/Images/logo1.png"
import logo2 from "../../public/Images/logo2.png"
import logo3 from "../../public/Images/logo3.png"
import newsletter from "../../public/Images/newsletter.png"
const Footer = () => {
  return (
      <>
          <div className='bg-[#000321] flex justify-evenly items-center h-[60vh] relative'>
              
              <div className='flex flex-col gap-10'>
                  <img src={logo} alt="logo"></img>
                  <div className='flex gap-3'>
                      <img className='h-[50px] w-[50px]' src={facebook} alt="facebook"></img>
                      <img className='h-[50px] w-[50px]' src={twitter} alt="twitter"></img>
                      <img className='h-[50px] w-[50px]' src={instagram} alt="instagram"></img>
                  </div>
              </div>
              <div className=''>
                  <ul className='text-[white] flex flex-col gap-4'>
                      <li><Link to='/'>Home</Link></li>
                  
                      <li><Link to='/'>Popular</Link></li>
               
                      <li><Link to='/'>About</Link></li>
                 
                      <li><Link to='/'>Contact</Link></li>
                  </ul>
              </div>
              <div>
                  <ul className='text-[white] flex flex-col gap-4'>
                      <li><Link to='/'>Help</Link></li>
                  
                      <li><Link to='/'>Resources</Link></li>
               
                      <li><Link to='/'>Application</Link></li>
                 
                      <li><Link to='/'>Team</Link></li>
                  </ul>
              </div>
              <div className='flex flex-col gap-4'>
                  <div className='flex items-start gap-3'>
                      <img src={logo1} alt="logo"></img>
                      <p className='text-[white]'>925 Filbert Street <br></br> Pennsylvania <br></br> 18072</p>
                  </div>
                  <div className='flex items-center gap-3'>
                      <img src={logo2} alt="logo"></img>
                      <p className='text-[white]'>+45 34 11 44 11</p>
                  </div>
                  <div className='flex items-center gap-3'>
                      <img src={logo3} alt="logo"></img>
                      <p className='text-[white]'>info@mail.com</p>
                  </div>
              </div>

             <div className='w-[50vw] h-[50vh] object-contain absolute top-[-9.5rem]' >
                <img  src={newsletter} alt="newsletter"></img>
            </div>
          </div>
            
          <div className='bg-[#000321] flex justify-between pl-[180px] pr-[180px] pb-[15px]'>
              <p className='text-[white]'>©2024. Agency.All rights reserved</p>
              <p className='text-[white]'>Privacy policy | Terms & conditions</p>
          </div>
          
          
      </>
  )
}

export default Footer