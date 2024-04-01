import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


const Hero1 = () => {

  const sliderImg = [{
    id: 1,
    src: "/slider/slider1.jpg",
    alt: "Food delivery banner"
  },
  {
    id: 2,
    src: "/slider/slider2.avif",
    alt: "Food delivery banner"
  },
  {
    id: 3,
    src: "/slider/slider3.avif",
    alt: "Food delivery banner"
  }
]
  return (
    
      <Carousel>
    <CarouselContent>
      {
        sliderImg.map((slider, index) => (
          <CarouselItem key={index}>
            <Image src={slider.src} alt={slider.alt} width={1000} height={400} className='w-full h-[200px] md:h-[400px] object-cover rounded-s-2xl'/>
          </CarouselItem>
        ))
      }
     
    
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
   
  
  )
}

export default Hero1