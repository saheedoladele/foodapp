import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LocateIcon } from 'lucide-react'
  

const PageHeader = () => {
  return (
    <div className='page-header pt-6'>
       <div className="content">
            <div className='flex items-center justify-between'>
                    <Image className='sm:display' src="/logo.png" width={140} height={140} />
                    <div className='flex items-center gap-3'>
                        <LocateIcon /> <span>13 Adeola crescent, Leventis</span>
                        <Button>Get Started</Button>
                    </div>
            </div>
       </div>
    </div>
  )
}

export default PageHeader