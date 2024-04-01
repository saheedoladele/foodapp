"use client"
import React, { useState } from 'react'
import PageHeader from '../_components/PageHeader'
import { ThumbsUp, Clock, BikeIcon, BadgeCheckIcon, PlusIcon, PhoneIcon, } from 'lucide-react'

import Footer from '../_components/Footer'
import { products } from '../contant/menus'


import SectionContent from '../_components/SectionContent'
import ProductDetailModal from '../_components/ProductDetailModal'
import OrderList from '../_components/OrderList'

const Restaurant = () => {
    const [open, setOpen] = useState(false)

    const showProduct = ()=> setOpen(true)
  return (
   <>
         <PageHeader />
    
        
    <div className="custom-container container-fluid mb-5">
        <div className="row">
       <div className="col-md-9 col-sm-12 col-sm-12 col-xs-12">
            <div className="top-bar py-4 px-2 bg-slate-50 shadow">
                <h2 className='font-bold text-3xl mb-4'>Adogan Restaurant, UK</h2>
                <span className='deal mt-4'>-10% Welcome deal</span>
                <div className='flex items-center gap-3 mt-4'>
                    <span className='flex items-center gap-2'> <ThumbsUp />  78%</span>
                    <span className='flex items-center gap-2'> <Clock />  24/7</span>
                    <span className='flex items-center gap-2'> <BikeIcon />  450.00</span>
                    <span className='flex items-center gap-2'> <BadgeCheckIcon />  Standard</span>
                </div>
            </div>
            {/* Content here */}
            <div className="row mt-4">
                <div className="col-md-3">
                <div className='text-orange-600 font-semibold px-1 py-1'>Sections</div>
                <ul className="list-group">
                    <li className="list-group-item py-2">Top Sellers</li>
                    <li className="list-group-item">Affordable Meal</li>
                    <li className="list-group-item">Bugger and Soundwich</li>
                    <li className="list-group-item">Chicken & Chips</li>
                    <li className="list-group-item">Africa Meal</li>
                    <li className="list-group-item">Pizza</li>
                    <li className="list-group-item">Taste</li>
                </ul>
                </div>
                <div className="col-md-9">
          
            <SectionContent data={products} title="Top Sellers" fn={showProduct} />
            <SectionContent data={products} title="Affordable Meals" fn={showProduct} />
                </div>
            </div>
       </div>
       <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3 bg-slate-50 rounded-sm shadow">
            <OrderList />
       </div>
    </div>
    </div>

    {/* <Faq /> */}
    <Footer />

    <ProductDetailModal open={open} setOpen={setOpen} />
   </>
  )
}

export default Restaurant