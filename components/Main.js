import React from 'react'
import code from '../public/code.json'
import Lottie from 'lottie-react'

const Main = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    
  return (
    
    <div className='z-[0] w-full'>
    <div className=' mt-14 h-screen z-[0] bg-[#1e1852]'>
    <div className='max-w-[100%]'>

    <div id='text' className='invisible sm:visible  relative text-center '>
    <p className='text-white  pt-40 text-2xl'>I'm Akinyosoye Oluwatobiloba Godwin ...</p>
    <p className='text-white   text-2xl'>A Full Stack Developer</p>
    <p className='text-white   text-2xl'>A Blockchain Developer</p>
    </div>
    <div id='text' className='relative sm:invisible z-20  mb-40 text-center '>
    <p className='text-white   text-2xl'>A Blockchain Developer </p>
    <p className='text-white   text-2xl'>A Full Stack Developer</p>
    <p className='text-white   text-2xl'>I'm  Akinyosoye Oluwatobiloba Godwin...</p>
    </div>
    <div  className='' >
      <Lottie options={defaultOptions}
        height={100}
        width={50} loop={true} 
    animationData={code}  />
    </div>
    <div>

    </div>
    </div>
    </div>

    </div>

  )
}

export default Main