import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
const Subscription = () => {
    
  
    return (
        <>
            <Navbar />
            <div className='py-22 flex flex-col items-center gap-10'>
                <div className='w-full mt-7'>
                    <h1 className='text-4xl font-bold text-white text-left px-75'>Subscription Details</h1>
                </div>

              
                <section className="bg-gray-800 rounded-lg border border-black/10 dark:border-white/10 w-[70%]">
                    <div className="p-4 sm:p-6 border-b border-black/10 dark:border-white/10">
                        <h3 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Subscription &amp; Billing</h3>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="flex justify-between gap-x-6 py-3 border-b border-black/10 dark:border-white/10">
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Current Plan</p>
                            <p className="text-black dark:text-white text-sm font-normal leading-normal text-right">Premium HD (4K Ultra HD)</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3 border-b border-black/10 dark:border-white/10">
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Next Billing Date</p>
                            <p className="text-black dark:text-white text-sm font-normal leading-normal text-right">December 03, 2026</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-3">
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Payment Method</p>
                            <p className="text-black dark:text-white text-sm font-normal leading-normal text-right">Visa **** 1234</p>
                        </div>
                        <div class="mt-6 flex flex-col sm:flex-row gap-4">
                            <button className="flex w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-primary text-white gap-2 text-sm font-bold  px-4 bg-red-500">Change Plan</button>
                            <button className="flex w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-white/10 text-black dark:text-white gap-2 text-sm font-bold  px-4 hover:bg-black/10">Cancel Subscription</button>
                        </div>
                    </div>
                </section>

                
            </div>
        </>
    )
}

export default Subscription
