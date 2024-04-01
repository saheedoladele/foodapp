"use client"
import React, { useEffect} from 'react'

const InstallBootstrap = () => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle.js");
      },[])

  return (
    <></>
  )
}

export default InstallBootstrap