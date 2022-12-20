import React from 'react'
import HeroImg from '../HeaderImg.png'
import Custombutton from './button'
import background from './grid.png'
import Typed from "typed.js"



function Hero() {
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Najmul',
        'H Noyon',
        'Najmul H Noyon'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
    <div className='w-full h-screen flex flex-col justify-between bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${background})` }} >
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center sm:order-last 2xl:w-[50rem]  xl:w-[41rem] lg:w-[35rem] h-auto '>
            <img src={HeroImg} alt=""  className='w-full'/>
        </div>
        <div className='flex flex-col justify-center md:items-center w-full px-2 py-8 '>
        <p className='py-3 text-4xl md:text-5xl text-stone-800'><span className='font-bold text-6xl '>ICT</span> কি? কেন? কিভাবে?</p>
        <h1 className='text-4xl font-sen py-8 text-stone-600'>Learn ICT with <span className='font-bold cursor-pointer text-[#68b984] hover:text-[#7b7c7c] ' ref={el}>Najmul H. Noyon</span></h1>
                
        <Custombutton type='submit' px5>
            Get Started
        </Custombutton>
        </div>
        </div>
    </div>
  )
} 

export default Hero 