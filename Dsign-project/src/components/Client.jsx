import React from 'react'
import client from "../../public/Images/Section 5.png"

const Client = () => {
  return (
      <>
      <div className='flex flex-col justify-center items-center mt-[100px] mb-[150px]'>
          <p className='text-[#001637] text-4xl font-bold pb-3'>What say clients about us.</p>
          <p className='text-center text-[#90A3B4]'>Event madness gathering innoies,& tech enthusiasts in Speced. <br></br> do more informations.</p> 
          <img src={client} alt="image" className='w-[80vw] h-[80vh] object-contain'></img>  
          </div>
          
         
      </>
  )
}

export default Client 