import React from 'react'
import UI_ELEMENT from "../../assets/pa-4.jpg"
import CARD_3 from "../../assets/pa-1.png"
import CARD_2 from "../../assets/pa-2.png"

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
    <div className='w-screen h-screen md:w-1/2 px-12 pt-8 pb-12'>
        <h2 className='"text-lg font-medium text-black'>Polling App</h2>
        {children}
    </div>
      <div className="hidden md:block w-1/2 h-screen bg-sky-50 bg-[url('/pa-4.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden relative">
       <img src={UI_ELEMENT} className='w-[100%] absolute right-0 top-24'/>
       <img src={CARD_2} className='w-64 lg:w-72 absolute top-[4%] left-[54%] shadow-lg shadow-blue-400/15'/>
       <img src={CARD_3} className='w-64 lg:w-72 absolute top-[75%] left-[10%] shadow-lg shadow-blue-400/15'/>
      </div>
    </div>
  )
}

export default AuthLayout
