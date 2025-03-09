import React from 'react'
import myPhoto from '../assets/my-photo.jpg'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center mt-20'>
        <div className='mb-10'>
            <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
             <p className='text-red-500 text-[40px] font-bold'>I'm Haneen Sweedan</p>
             <p className='text-white text-[40px] font-bold' >I'm FrontEnd Developer</p>
             <div className='mt-4 flex gap-4'>
             <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full   hover:border-[1px]'>SEE PORTFOLIO</button>
             <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full hover:border-[1px]'>CONTACT ME</button>
             </div>
        </div>
        <div className='flex justify-center '>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF0040] to-[#2A26BB]'>
            <img className='h-full w-[250px] object-cover rounded-[20px]' src={myPhoto} alt="my-photo" />
        </div>
        </div>
        
    </div>
  )
}

export default Hero