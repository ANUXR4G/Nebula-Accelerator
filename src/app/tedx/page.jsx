import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import Tedx from "@/app/tedx/tedxbharatpage"
function page() {
  return (
    <div>
      <Navbar/>
      <Tedx/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default page;