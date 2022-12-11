import React from 'react'
import HeroImg from '../HeaderImg.png'
import Custombutton from './button'

function Hero() {
  return (
    <div className='w-full h-screen flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <p className='text-3xl font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h1 className='py-3 text-5xl md:text-7xl font-bold font-serif '>Learn ICT with Najmul H. Noyon</h1>
        <Custombutton type='submit' px5>
            Get Started
        </Custombutton>
        </div>
        <div className='flex flex-col justify-center  2xl:w-[50rem] xl:w-[41rem] lg:w-[35rem] h-auto '>
            <img src={HeroImg} alt=""  className='w-full  '/>
        </div>
           
        </div>
    </div>
  )
} 

export default Hero