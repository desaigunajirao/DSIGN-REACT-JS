import React from 'react'
import { Link } from 'react-router-dom'
import rectangle from "../../public/Images/Rectangle 443.png"
import icon1 from "../../public/Images/iocn.png"
import icon2 from "../../public/Images/iocn (1).png"
import icon3 from "../../public/Images/iocn (2).png"
import icon4 from "../../public/Images/iocn (3).png"
const Service = () => {
  return (
      <>
     <div className='flex px-20 justify-evenly relative mt-20'>
              <div className='flex flex-col gap-7 justify-center'>
                  <p className='text-5xl font-bold'>We provide that <br></br> service.</p>
                  <p className='text-[#7D82A1]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br></br> accusantium doloremque laudantium, totam rem aperiam, eaque <br></br> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br></br> dicta sunt explicabo</p>
                  <Link className='text-[#0075FF] font-semibold' to='/'>Learn more →</Link>
              </div>
              
              <div className=''>
                  <img className='h-45 w-[30vw] ' src={rectangle} alt="image"></img>
                      <div className='grid grid-cols-2 absolute bottom-[6.5rem] right-[17rem] gap-7'>
                      <div className='rounded-2xl border border-[]-600 shadow-md h-50 text-start px-5 py-5 w-[15vw] bg-white'>
                          <img src={icon1}></img>
                          <p className='font-bold'>Marketing</p>
                          <p>Follow a hashtag total <br></br> posts, videos </p>
                      </div>
                      <div className='rounded-2xl border border-[]-600 shadow-md h-50 text-start px-5 py-5 w-[15vw] bg-white'>
                          <img src={icon2}></img>
                          <p className='font-bold'>Graphic Design</p>
                          <p>Follow a hashtag total <br></br> posts, videos </p>
                      </div>
                      <div className='rounded-2xl border border-[]-600 shadow-md h-50 text-start px-5 py-5 w-[15vw] bg-white'>
                          <img src={icon3}></img>
                          <p className='font-bold'>Heaking</p>
                          <p>Follow a hashtag total <br></br> posts, videos </p>
                      </div>
                      <div className='rounded-2xl border border-[]-600 shadow-md h-50 text-start px-5 py-5 w-[15vw] bg-white'>
                          <img src={icon4}></img>
                          <p className='font-bold'>UI/UX Design</p>
                          <p>Follow a hashtag total <br></br> posts, videos </p>
                      </div>
                  
                  </div>
                
                  
              </div>
      </div>
      </>
  )
}

export default Service