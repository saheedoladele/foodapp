import { Button } from '@/components/ui/button'
import { Search } from '@mui/icons-material'
import { CatIcon, LucideLayoutGrid, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-6'>
        <Image src="/logo.jpg" width={110} height={100} alt='Adogan Logo' />

        <h2 className='hidden md:flex items-center gap-2 border rounded-full p-2 px-5 bg-slate-200'>
            <LucideLayoutGrid /> Browse Category
        </h2>
        <div className='md:flex items-center border rounded-full gap-4 p-2 px-5 hidden'>
            <Search />
            <input type="text" placeholder='Serach...' className='outline-none' />
        </div>
    </div>
    <div className='flex gap-4 items-center'>
        <ShoppingBasket />
        <Button>Sign-In</Button>
    </div>
    </div>
  )
}

export default Header