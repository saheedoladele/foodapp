import React from 'react'
import { products } from '../contant/menus'

import { ThumbsUpIcon} from 'lucide-react'
const Menus = () => {
  return (
    <>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-3">Top Menus for you</h2>
    <div className='row'>
        {products.map((product) => (
            <div key={product.id} className="group relative col-lg-4">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-md w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-700">
                    {/* <a href={product.href}> */}
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {product.name}
                    {/* </a> */}
                  </h3>
                  <p className="flex gap-2 items-center mt-1 text-sm text-gray-500"><ThumbsUpIcon /> <span>78%</span> (450) </p>
                </div>
               
              </div>
            </div>
          ))}
    </div>

    </>
  )
}

export default Menus