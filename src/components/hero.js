import React from 'react'
import HeroImg from '../HeaderImg.png'
import Custombutton from './button'
import Clock from './clock'

function Hero() {
  return (
    <div className='w-full h-screen flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <p className='py-3 text-4xl md:text-5xl font-bold text-stone-800'>ICT কি? কেন? কিভাবে?</p>
        <h1 className='text-4xl font-sen py-8 text-stone-600'>Learn ICT with Najmul H. Noyon</h1>
        <Custombutton type='submit' px5>
            Get Started
        </Custombutton>
        </div>
        <div className='flex flex-col justify-center  2xl:w-[50rem] xl:w-[41rem] lg:w-[35rem] h-auto '>
            <img src={HeroImg} alt=""  className='w-full  '/>
        </div>
           <div className='absolute flex flex-col py-8 md:min-w-[760px] 
           bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
           border border-slate-200  rounded-xl text-center shadow-xl bg-stone-100 text-stone-800'>
              <p className=''>Local Time</p>
              <div className='flex justify-center flex-wrap px-4 text-center'>
              <p className='flex px-4 py-2'>
              <Clock/>
              </p>

              </div>
              
           </div>
        </div>
    </div>
  )
} 

export default Hero