import React, { Fragment, useRef, useState } from 'react'

import { Dialog,RadioGroup, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon, StarIcon, XIcon } from 'lucide-react'
import { CiShoppingCart} from 'react-icons/ci'
import { FaArrowRight} from 'react-icons/fa'
import SelectItem from './SelectItem'

const ProductDetailModal = ({open, setOpen}) => {
   
    const [qty, setQty] = useState(1)

   const handleIncreament = ()=>{
        setQty((prev) => prev + 1)
   }

   const handleDecreament = ()=>{
    setQty((prev) => prev - 1)
}

    const product =  {
        id: 1,
        name: 'Bugger',
        href: '#',
        imageSrc: '/food/food1.png',
        imageAlt: "Correct bugger",
        price: 'NGN3,500',
        description: 'Amala and ewedu with asaulted meat, you can also add pomon',
        colors: ['black','red']
      }

     

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                      </div>
{/* product information */}
            <div className='mt-2'>
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                      <p className="text-2xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-3">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
                <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                    key={rating}
                    className={classNames(
                        product.rating > rating ? 'text-gray-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                    />
                ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
            </div>
            </div>

            <div className="mt-6">
            <h4 className="sr-only">Description</h4>

            <p className="text-sm text-gray-700">{product.description}</p>
            </div>

            <div className='flex gap-2 items-center'>
                <button onClick={handleDecreament} disabled={qty <=1 ? true : false} className='p-2 bg-slate-300 font-semibold text-2xl rounded-full hover:cursor-pointer'> <MinusIcon /></button>
                <span className='p-2 text-2xl font-semibold'>{qty}</span>
                <button onClick={handleIncreament} className='p-2 font-semibold text-2xl bg-orange-600 rounded-full text-white hover:cursor-pointer hover:bg-orange-400'><PlusIcon /> </button>
            </div>
         </div>
         </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                     
                        <section className='mb-2'>
                            <h5 className='font-semibold mb-3'>Choose Swallow Type</h5>
                            <small>Choose One</small>
                            <div className="flex flex-col gap-1">
                            <SelectItem label={'Amala'} />
                            <SelectItem label={'Eba'} />
                            <SelectItem label={'Semo'} />
                            <SelectItem label={'Iyan'} />

                            </div>
                        </section>

                        <section>
                            <h5 className='font-semibold mb-3'>Extra Swallow</h5>
                            <small>Choose One</small>
                            <div className="flex flex-col gap-1">
                            <SelectItem label={'Amala'} price={'N400'} />
                            <SelectItem label={'Eba'} price={'N400'} />
                            <SelectItem label={'Semo'} price={'N400'} />
                            <SelectItem label={'Iyan'} price={'N400'} />

                            </div>
                        </section>

                        <div className='mt-3 flex gap-2'>
                            <button className='p-2 rounded-md bg-orange-400 text-white flex gap-1 items-center'> <CiShoppingCart size={18} />  Add to Cart</button> 
                            <button className='p-2 rounded-md bg-orange-600 text-white flex gap-1 items-center'>Order Now  <FaArrowRight size={18} /> </button>
                        </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProductDetailModal