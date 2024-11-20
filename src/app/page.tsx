import React from 'react'
import Navbar from "@/app/navbar"
import Heroslider from "@/app/heroslider"
import Whatwedo from "@/app/whatwedo"
function page() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Heroslider/>
      <Whatwedo/>
      </div>
  )
}

export default page;