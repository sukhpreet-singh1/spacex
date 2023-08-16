import React from 'react'
import Button from './Button'
const Hero = () => {
  return (
    <div className="h-screen  bg-[url('./Images/background1.jpg')] bg-no-repeat bg-cover bg-center flex flex-col  ">
      <div className=" flex items-center  justify-center flex-col h-5/6 ">
        <h1 className="text-white text-6xl md:text-8xl font-Poppins">SpaceX</h1>
        <span>
          <h1 className="text-white text-2xl md:text-3xl font-Poppins mt-5 lg:mt-9 ">
            Mission To Mars
          </h1>
        </span>
      </div>

      <div className="flex items-center justify-center pb-6 ">
        <Button text="Dicover" />
      </div>
    </div>
  )
}

export default Hero
