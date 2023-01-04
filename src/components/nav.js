import React,{useState} from 'react'
import logo from '../noyon_logo.svg'
import { XMarkIcon,Bars3Icon }  from '@heroicons/react/24/outline'
export default function Navbar() {
  const [nav,setNav] = useState(false)
  const handleCLick = ()=> setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-sm'>
        <div className='px-5 flex justify-between items-center h-full max-w-[1240px] mx-auto '>
            <div className='flex items-center'>
            <a href="#">
            <img src={logo} alt="" className='w-[10rem] h-15' />
            </a>
              <ul className='hidden md:flex cursor-pointer m-5 font-mono '>
                <li className='hover:text-[#68b984] hover:scale-125 transition  ease-in-out '>Home</li>
                <li className='hover:text-[#68b984] hover:scale-125 transition  ease-in-out '>About</li>
                <li className='hover:text-[#68b984] hover:scale-125 transition  ease-in-out '>Support</li>
                <li className='hover:text-[#68b984] hover:scale-125 transition  ease-in-out '>Course</li>
              </ul>
            </div>
            <div className='hidden md:flex pr-4'>
              <input
                    type="text"
                    className="block w-full px-2 py-2 text-[#68b984] bg-[#F4F7FD] border drop-shadow-sm rounded-full focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-[#68b984] rounded-full mx-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>  
            </div>
            {/* mobile button */}
            <div className='md:hidden' onClick={handleCLick}>
              

            {!nav ? <Bars3Icon className='h-6 w-6 cursor-pointer' />:<XMarkIcon className='h-6 w-6 cursor-pointer' />
}

            
           </div>
      </div>
       
              <ul className={!nav ? 'left-[100%] fixed ': 'absolute bg-white w-full duration-200 ease-in-out'}>
                <li className='border-b-2 w-full hover:text-[#68b984]'>Home</li>
                <li className='border-b-2 w-full hover:text-[#68b984]'>About</li>
                <li className='border-b-2 w-full hover:text-[#68b984]'>Support</li>
                <li className='border-b-2 w-full hover:text-[#68b984]'>Course</li>
                <div className='flex py-2'>
                <input
                    type="text"
                    className="block w-[50%] px-3 py-2 text-[#68b984] bg-[#F4F7FD] border drop-shadow-lg rounded-full focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4  text-white bg-[#68b984] rounded-full mx-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>  
                </div> 
              </ul>

        </div>
    
  )
}
