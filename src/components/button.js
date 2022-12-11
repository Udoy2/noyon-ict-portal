import React from 'react'

function CustomButton({children,px5,...otherprops}) {
  return (
    <button {...otherprops} className={`${px5 ? 'text-2xl rounded-full shadow-lg  px-10 my-3 font-bold sm:w-[60%]' : ''} border-none bg-[#68b984] py-3  text-white mr-4 shadow-slate-500/40`}>
    {children}
    </button>
  )
}

export default CustomButton
