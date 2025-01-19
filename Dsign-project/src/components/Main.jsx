import React from 'react'
import dashboard from "../../public/Images/dashboard.png"
import logos from "../../public/Images/logos.png"
const Main = () => {
  return (
      <>
      <main>
          <div className='flex flex-col justify-center items-center mt-20'>
          <p className='text-5xl text-center font-bold'>Solve problem with an <br></br> integrated agency.</p>
          <p className='mt-10 text-center text-xl'>Ehya is the Instagram analytics platform teams use to stay focused on the goals, track <br></br> engagement for report your business .</p>
         </div>
              
        <div className='mt-10 flex justify-center gap-4'>
           <button className='bg-[#0075FF] px-12 py-4 rounded-bl-[120px] rounded-r-[80px] text-[#FFFFFF] hover:bg-[white] hover:text-[#0075FF] hover:border border-gray-600 '>See our portfolio</button>
           <button className='bg-[white] px-12 py-4 rounded-bl-[120px] rounded-r-[80px] text-[#0075FF] border border-gray-600 hover:bg-[#0075FF] hover:text-[#FFFFFF]' >More info</button>       
        </div>

        <div className='flex justify-center'>
          <img src={dashboard} alt="dashboard"></img> 
        </div>

        <div className='mx-20 flex justify-center'>
          <img src={logos} alt="logos"></img>
        </div>
      </main>
          
          
      </>
  )
}

export default Main