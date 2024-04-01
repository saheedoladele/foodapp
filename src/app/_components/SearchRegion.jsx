import React from 'react'
import { Search } from '@mui/icons-material'

const SearchRegion = () => {
  return (
    <div className='md:flex items-center border rounded-md gap-4 p-2 px-3 hidden'>
            <Search />
            <input type="text" placeholder='Serach...' className='outline-none w-full border-0 search-text' />
        </div>
  )
}

export default SearchRegion