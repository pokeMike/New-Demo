// eslint-disable-next-line no-unused-vars
import React from 'react';
import {pricingPlans} from './pricingPlan.jsx';
import Navbar from '../Components/Navbar';

export default function PricingPlans () {
  return (
    <div>
        <Navbar />
        <div className='mx-auto max-w-7xl bg-white px-24 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
                Pricing Plans for Teams of all sizes
            </h2>
            <p className='mt-4 max-w-3xl text-lg text-slate-500'>
                Choose an affordable plan that is packed with the best 
                feature for creating customer loyalty and driving sales.
            </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            {pricingPlans.map((plan)=>
            <div key={plan.title} className='rounded-2xl border border-slate-200 bg-white p-8 shadow-lg relative flex flex-col'>
                <h3 className='text-lg font-semibold  leading-5'>
                    {plan.title}
                </h3>
                {plan.mostPopular && <p className='absolute top-0 -translate-y-1/2 rounded-full bg-emerald-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide shadow-md'>
                Most Popular
                </p>}
                <p className='mt-4 text-slate-700 text-sm leading-6 flex-grow'>
                    {plan.description}
                </p>
                <div className='mt-4 rounded-lg bg-slate-50 p-6 -mx-6 flex-grow'>
                    <p className='text-sm font-semibold text-slate-500 flex items-center'>
                        <span>{plan.currency}</span>
                        <span className='text-4xl ml-3 text-slate-900'>${plan.price}</span>
                        <span className='ml-1.5'>{plan.frequency}</span>
                    </p>
                    {/* Feature */}
                    <ul className='mt-6 space-y-4'>
                        {plan.features.map((feature) => (
                            <li key={feature} className='text-sm text-slate-700 leading-6 flex'>
                                <svg
                                className='h5 w-5 text-emerald-500 shrink-0'
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"  
                                viewBox="0 0 24 24"
                                >
                                    <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/>
                                </svg>
                                <span className='ml-3'>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Call to action */}
                <a 
                    href='#'
                    className='mt-auto block bg-emerald-500 text-white hover:bg-emerald-600 px-6 py-4 leading-4 text-sm font-semibold text-center rounded-lg shadow-md'>
                    {plan.cta}
                </a>
            </div>
            )}
        </div>
    </div>
  )
}
