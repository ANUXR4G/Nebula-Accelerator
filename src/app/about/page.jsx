import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Spline from '@splinetool/react-spline';


const Page = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header Section */}
      <header className="px-6 md:px-16 py-10 bg-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">We Are Nebula</h1>
        <div className="mt-6 bg-gray-300 h-40 md:h-2/3 w-full">{/* Spline Component */}
          <Spline scene="https://prod.spline.design/l5g4dueiacbS19rO/scene.splinecode" />
          {/* Text Content */}</div>
       
      </header>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Image */}
          <div className="bg-gray-300 h-60 md:h-80 w-full"></div>
          {/* Text Content */}
          <div className="text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet eros sed eleifend.
            </p>
            <p className="mt-4">
              Pellentesque pharetra consequat quam, nec pellentesque tortor dapibus sed. Fusce cursus leo eu cursus molestie. Phasellus fermentum leo nec elit malesuada aliquet. Vivamus ornare pharetra massa eu feugiat. Morbi ullamcorper eros eu arcu dapibus, sit amet porttitor mi luctus.
            </p>
            <p className="mt-4">
              Suspendisse mattis facilisis eleifend. Praesent maximus eros id nulla vehicula, et aliquet mi accumsan. Praesent suscipit lorem quis dui scelerisque, vitae faucibus sapien dapibus.
            </p>
          </div>
        </div>
      </section>

     {/* Vision, Mission, Value Proposition */}
     <section className="bg-[#001f3f] px-6 md:px-16 py-10 text-white">
  <div className="space-y-12">
    {/* Vision Section */}
    <div>
      <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">Vision</h2>
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam.
      </p>
    </div>

    {/* Mission Section */}
    <div>
      <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">Mission</h2>
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam.
      </p>
    </div>

    {/* Value Proposition Section */}
    <div>
      <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">Value Proposition</h2>
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam.
      </p>
    </div>
  </div>
</section>



      {/* Portfolio Section */}
      <section className="px-6 md:px-16 py-10">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <p className="text-lg font-bold uppercase cursor-pointer">Portfolio</p>
            <p className="text-lg font-bold uppercase cursor-pointer">Advisory Board</p>
            <p className="text-lg font-bold uppercase cursor-pointer">Entrepreneurs</p>
            <p className="text-lg font-bold uppercase cursor-pointer">Mentors</p>
            <p className="text-lg font-bold uppercase cursor-pointer">Investors</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna auctor orci feugiat consectetur.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Page;
