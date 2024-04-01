import React from 'react'
import Image from 'next/image'
import { PlusIcon } from 'lucide-react'

const TopMenus = ({ data, title, fn}) => {
  return (
    <>
    {/* <div className='text-2xl font-semibold px-2 mb-2'>{title}</div>
    <div className="row  gap-3 mb-4 bg-red-200">

                {
                    data.map((product) =>(
                        <div key={product.id} className="col-sm-12 col-xs-12 col-md-6 col-lg-3 col-xl-3 border  rounded-md cursor-pointer " onClick={fn}>
                        <div className='flex gap-2'>
                        <Image src="/food/food1.png" width={170} height={150} />
                        <div className=''>
                            <h5>{product.name}</h5>
                            <span>{product.description} </span>
                        </div>
                        </div>
                        <div className='flex justify-between mt-1 py-1'>
                            <span>&#8358;{product.price}</span>
                            <button onClick={fn} className='rounded-full border p-1 bg-orange-600 text-white' > <PlusIcon /> </button>
                        </div>
                    </div>
                    ))
                }
            
            </div> */}

<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Menus</h2>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product.id} className="group relative hover:cursor-pointer" onClick={fn}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-1xl font-semibold text-gray-700">
                  
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                 
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">NGN{product.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
            </>
  )
}

export default TopMenus