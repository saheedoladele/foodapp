import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    
          <div className="relative bg-slate-200 h-1/4">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className=" md:mx-auto max-w-2xl lg:mx-0">
                  
                 
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-1xl">
                    Get food fast that you think
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                   Ypu can get any food of your choice at your door step, you are jus a tap away from getting your best food dilivered
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      Get App
                    </a>
                    <Button>Order Now</Button>
                   
                  </div>
                </div>
              </div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  src="/food/food3.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
      
      
  )
}

export default Hero