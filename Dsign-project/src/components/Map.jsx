import React from 'react'
import map from "../../public/Images/map.png"
import flag from "../../public/Images/flag.png"
import flag1 from "../../public/Images/Vector (1).png"
import flag2 from "../../public/Images/Vector (2).png"
import flag3 from "../../public/Images/Vector (3).png"


const Map = () => {
  return (
      <>
          <div className='bg-[#ceeaf5] flex flex-col justify-center items-center mt-20 relative'>
              <p className='text-center font-bold text-4xl absolute top-10'>Our network & world <br></br> work details.</p>
              <img className='pt-[185px]' src={map} alt="map"></img> 
              
              <div className='flex gap-5 pb-[60px]'>
              <div className='rounded-2xl border border-[]-600 shadow-lg h-50 text-start px-5 py-5 w-[15vw] bg-[#fef7f7a6]'>
                      <div className='flex items-center gap-3'>
                          <img src={flag} alt="flag"></img>
                          <p className='font-bold text-[#183B56] text-[1.1rem]'>India</p>
                      </div> 
                      <hr className='my-3 border-t border-gray-400' />
                      <p className='text-[#7C8F9E]'>Event madness gathering <br></br> innoies, & tech enthusiasts <br></br> in Speced.</p>
              </div>
                  <div className='rounded-2xl border border-[]-600 shadow-lg h-50 text-start px-5 py-5 w-[15vw] bg-[#fef7f7a6]'>
                      <div className='flex items-center gap-3'>
                          <img src={flag1} alt="flag"></img>
                          <p className='font-bold text-[#183B56] text-[1.1rem]'>United States</p>
                      </div> 
                      <hr className='my-3 border-t border-gray-400' />
                      <p className='text-[#7C8F9E]'>Event madness gathering <br></br> innoies, & tech enthusiasts <br></br> in Speced.</p>
              </div>
                  <div className='rounded-2xl border border-[]-600 shadow-lg h-50 text-start px-5 py-5 w-[15vw] bg-[#fef7f7a6]'>
                      <div className='flex items-center gap-3'>
                          <img src={flag2} alt="flag"></img>
                          <p className='font-bold text-[#183B56] text-[1.1rem]'>Australia</p>
                      </div> 
                      <hr className='my-3 border-t border-gray-400' />
                      <p className='text-[#7C8F9E]'>Event madness gathering <br></br> innoies, & tech enthusiasts <br></br> in Speced.</p>
              </div>
                  <div className='rounded-2xl border border-[]-600 shadow-lg h-50 text-start px-5 py-5 w-[15vw] bg-[#fef7f7a6]'>
                      <div className='flex items-center gap-3'>
                          <img src={flag3} alt="flag"></img>
                          <p className='font-bold text-[#183B56] text-[1.1rem]'>China</p>
                      </div> 
                      <hr className='my-3 border-t border-gray-400' />
                      <p className='text-[#7C8F9E]'>Event madness gathering <br></br> innoies, & tech enthusiasts <br></br> in Speced.</p>
              </div>
              </div>
              
      </div>
      </>
  )
}

export default Map