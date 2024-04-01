"use client"
import React, { useState} from 'react'
import ProductDetailModal from '../_components/ProductDetailModal'
import Footer from '../_components/Footer'
import Incentives from '../_components/Incentives'
import Categorybar from '../_components/Categorybar'
import SearchRegion from '../_components/SearchRegion'
import SectionContent from '../_components/SectionContent'
import { products } from '../contant/menus'
import Header2 from '../_components/Header2'

const Categories = () => {
    const [open, setOpen] = useState(false)

    const showProduct = ()=> setOpen(true)

  return (
    <>
    <Header2 />

    <div className="container mt-5">
     <div className="row">
     <div className="col-lg-3">
        <Categorybar />
      </div>
      <div className="col-lg-9">
          <div className="mt-2 mb-4">
             <SearchRegion />
          </div>
         
          <SectionContent data={products} title="Top Sellers" fn={showProduct} />
        
      </div>
     </div>
    </div>
   
    <Incentives />
    <Footer />

    <ProductDetailModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Categories