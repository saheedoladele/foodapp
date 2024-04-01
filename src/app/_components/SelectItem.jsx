import React from 'react'
import { PlusIcon } from 'lucide-react'

const SelectItem = ({ label, price}) => {
  return (
    <div className='p-1 border rounded-md flex justify-between'><span>{label} + {price}</span> <button className='p-1 rounded-full bg-orange-500 text-white'><PlusIcon /></button> </div>
  )
}

export default SelectItem