import React from 'react';
import Navbar from "@/app/navbar";
import Heroslider from "@/app/heroslider";
import Whatwedo from "@/app/whatwedo";
import Team from "@/app/team";
import NewsForum from "@/app/newsforum";
import Footer from "@/app/footer";
function page() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Heroslider/>
      <Whatwedo/>
      <Team/>
      <NewsForum/>
      <Footer/>
      </div>
  )
}

export default page;