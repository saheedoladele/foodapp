import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header2 = () => {
  return (
    <header data-bs-theme="light">
  
   <nav className="navbar navbar-expand-md navbar-light  bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
        <Image src="/logo.jpg" width={110} height={100} alt='Adogan Logo' />
        </Link>
       
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className=" active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
       
      </ul>
    </div>
      </div>
    </nav>


 
  </header>
  )
}

export default Header2