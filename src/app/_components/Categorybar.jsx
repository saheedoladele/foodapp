import React from 'react'
import { FaHome } from 'react-icons/fa'
import { PiBowlFood } from 'react-icons/pi'
import { SoupIcon, PizzaIcon, CakeIcon, DonutIcon, WineIcon, SaladIcon, DrumstickIcon} from 'lucide-react'
import Link from 'next/link'

const Categorybar = () => {
    const categories = [{
        id: 1,
        name:"Local Food",
        url:"/categories",
        icon: <PiBowlFood className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 2,
        name:"International Dish",
        url:"/categories",
        icon: <SoupIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 3,
        name:"Pizza",
        url:"#",
        icon: <PizzaIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 4,
        name:"Bugger",
        url:"/categories",
        icon: <CakeIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 5,
        name:"Snacks",
        url:"/categories",
        icon: <DonutIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 6,
        name:"Chicken",
        url:"/categories",
        icon: <DrumstickIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    },
    {
        id: 7,
        name:"Drinks",
        url:"/categories",
        icon: <WineIcon className='bg-orange-500 text-orange-100 px-1 w-8 h-8 rounded-full' />
    }
]
  return (
   <>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-3">Categories</h2>
    <ul className="list-group">
       
        {
            categories.map((category) => (
                <Link href={category.url} className='link' key={category.id}>
               <li className="list-group-item py-3 flex gap-2 px-3 items-center" key={category.id}>{category.icon}  {category.name}</li> 
               </Link>
            ))
        }
    </ul>
   </>
  )
}

export default Categorybar