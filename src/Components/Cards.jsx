import React from 'react'
import { assets } from '../assets/assets'

const Cards = () => {
  return (
    <div className='container px-8 py-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.dileveryn_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Free Dilevery</h2>
               <p>Free Shipping for orders over $20</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.dileveryn_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Free Dilevery</h2>
               <p>Free Shipping for orders over $20</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.dileveryn_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Free Dilevery</h2>
               <p>Free Shipping for orders over $20</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.dileveryn_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Free Dilevery</h2>
               <p>Free Shipping for orders over $20</p>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cards