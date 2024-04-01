import React from 'react'
import Image from 'next/image'
import { PlusIcon } from 'lucide-react'

const SectionContent = ({ data, title, fn}) => {
  return (
    <>
    <div className='text-2xl font-semibold px-2 mb-2'>{title}</div>
    <div className="row flex gap-3 mb-4">

                {
                    data.map((product) =>(
                        <div key={product.id} className="col-md-5 border px-3 py-3 rounded-md cursor-pointer " onClick={fn}>
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
            
            </div>
            </>
  )
}

export default SectionContent