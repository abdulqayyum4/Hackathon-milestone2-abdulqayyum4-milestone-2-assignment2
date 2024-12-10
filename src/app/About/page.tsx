import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url('/about.jpg')"}}>
    <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
      <h2 className='text 4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
      <p>MotoMajesty is your premier destination for all things motorcycles, offering a curated selection of high-performance bikes, gear, and accessories. Whether you're a seasoned rider or a beginner, we provide top-quality products designed to enhance your riding experience. Explore our collection and elevate your journey with MotoMajesty today!</p>
    </div>
    </section>
  )
}

export default About
