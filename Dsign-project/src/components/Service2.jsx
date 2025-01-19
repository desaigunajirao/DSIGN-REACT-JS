import React from 'react'
import rectangle1 from "../../public/Images/Rectangle 454.png"
import laptop from "../../public/Images/clay-mockup 1.png"
import check from "../../public/Images/checkmark.png"
const Service2 = () => {
  return (
      <>
          <div className='flex px-20 justify-evenly items-center relative mt-20'>
              <div className=''>
                  <img className='h-45 w-[30vw] ' src={rectangle1} alt="image"></img>   
                  <img className='absolute bottom-[-1rem] right-[42rem]' src={laptop} alt="laptop"></img>
              </div>
              <div>
                  <p className='text-5xl font-bold'>Why we best?</p>
                  <p className='text-[#7D82A1] pt-4 pb-10'>Don’t waste time on search manual tasks. Let Automation do it for you. <br></br> Simplify workflows, reduce errors, and save time.</p>
                  <div className=' flex flex-col gap-4'>
                      <div className='flex items-center gap-5'>
                      <img src={check} alt="checkmark"></img>
                      <p className='font-bold text-2xl'>Quality</p>
                      </div>
                      <p className='pl-[4rem] text-[#7D82A1]'>Follow a hashtag growth total posts, videos and <br></br> images.more revitions</p>
                  
                  <div className='flex items-center gap-5'>
                      <img src={check} alt="checkmark"></img>
                      <p className='font-bold text-2xl'>Communication</p>
                      </div>
                      <p className='pl-[4rem] text-[#7D82A1]'>Follow a hashtag growth total posts, videos and <br></br> images.more revitions</p>
                  <div className='flex items-center gap-5 '>
                      <img src={check} alt="checkmark"></img>
                      <p className='font-bold text-2xl'>Reliability</p>
                      </div>
                      <p className='pl-[4rem] text-[#7D82A1]'>Follow a hashtag growth total posts, videos and <br></br> images.more revitions</p>
                  </div>
                  
              </div>
      </div>
      </>
  )
}

export default Service2