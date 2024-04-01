"use client"
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import Menus from "./_components/Menus";
import Categories from "./_components/Categories";
import Incentives from "./_components/Incentives";
import Restaurants from "./_components/Restaurants";
import Hero1 from "./_components/Hero1";
import SearchRegion from "./_components/SearchRegion";
import Categorybar from "./_components/Categorybar";
import Header2 from "./_components/Header2";
import SectionContent from "./_components/SectionContent";
import ProductDetailModal from "./_components/ProductDetailModal";
import { useState } from "react";
import { products } from "./contant/menus";
import TopMenus from "./_components/TopMenus";

export default function Home() {
  const [open, setOpen] = useState(false)

    const showProduct = ()=> setOpen(true)

  return (
   <>
      <Header2 />
      <div className="p-5 md:p-10 px-16">
      <Hero1 />
      </div>
      
      <div className="container mt-1">
       <div className="row">
       <div className="col-lg-3">
          <Categorybar />
        </div>
        <div className="col-lg-9">
            <div className="mt-2 mb-4">
               <SearchRegion />
            </div>
           
            <TopMenus data={products} title="Top Sellers" fn={showProduct} />
            <Restaurants />
        </div>
       </div>
      </div>
     
      <Incentives />
      <Footer />

      <ProductDetailModal open={open} setOpen={setOpen} />
   </>
  );
}
