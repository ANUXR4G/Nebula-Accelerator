import React from 'react';
import Navbar from "@/app/navbar";
import Heroslider from "@/app/heroslider";
import Whatwedo from "@/app/whatwedo";
import Team from "@/app/team";
function page() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Heroslider/>
      <Whatwedo/>
      <Team/>
      </div>
  )
}

export default page;