import { Badge } from '@/components/ui/badge'
import React from 'react'

const Categories = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Categories</h2>

            <div className='mt-10 flex gap-3 items-center justify-center'>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Chicken</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Local Food</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">International</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Snacks</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Bugger</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Paster</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Pizza</Badge>
                <Badge variant="primary" className="p-2 px-4 cursor-pointer text-xl">Shawarma</Badge>
            </div>
      </div>
    </div>
  )
}

export default Categories