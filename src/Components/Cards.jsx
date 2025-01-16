import React from 'react'
import { assets } from '../assets/assets'

const Cards = () => {
  return (
    <div className='container px-8 py-5 bg-[#afdff6] mt'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.dileveryn_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Free Dilevery</h2>
               <p>Free Shipping for orders over $20</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.support_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Support 24/7</h2>
               <p>24 hours a day, 7 days a week</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.payment_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Payment</h2>
               <p>Pay with Waafi Visa Card</p>
               </div>
            </div>
            <div className="flex shadow-lg px-5 py-8 border-2 border-grey-500 ">
                <img className='h-14 px-2' src= {assets.grant_icon} alt="" />
               <div>
               <h2 className='font-bold text-2xl'>Guarantee</h2>
               <p>Within 30 days for an exchange</p>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cards