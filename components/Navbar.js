import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import tobi from '../public/plink.svg';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
// import {FaLinkedIn, FaGithub} from 'react-icons/fa';
import {useRouter} from 'next/router';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter()
// useEffect(()=>{
//   if(
//     router.asPath === '')
// },[router])
  return (
    <div className='fixed  flex top-0  overflow-auto'>
    {/* <div className='bg-grey-900'> */}
    
    <div className='fixed  shadow-2xl bg-gradient-to-r from-[#1e1852] to-[#1e1852] h-14 w-full'>

    <div className='w-40 h-20'>
    <Link href='/'>
      <Image src ={tobi}
        width={80} height={10} className='relative text-white top-3 mx-4 w-20 h-8  '/>
    </Link>
      </div>
    
    <div className='relative bottom-20'>

      <ul className='flex flex-row wrap gap-20 cursor-pointer tracking-widest justify-end text-sm p-4 '>
        <Link href='/'>
          <li className='hidden  sm:flex sm:mx-4 isolate hover:border-b hover:scale-70 hover:ease-out-duration-100 hover:font-bold text-white'>Me...</li>
        </Link>
        <Link href='/'>
          <li  className=' hidden sm:flex hover:scale-70 hover:border-b hover:ease-out-duration-200 hover:font-bold text-white'>Projects</li>
        </Link>
        <Link href='/'>
          <li className='hidden sm:flex hover:scale-70 hover:border-b hover:ease-out-duration-300 hover:font-bold text-white'>Career</li>
        </Link>
        <Link href='/'>
          <li  className='hidden sm:flex hover:scale-70 hover:border-b hover:ease-out-duration-300 hover:font-bold mx-2 text-white'>Contacts</li>
        </Link>
      <AiOutlineMenu size={25} onClick={handleNav} className='relative text-white  sm:hidden'/>
      </ul>

    {/* <div className='absolute cursor-pointer '> */}
    </div>
    
    </div>

<div className=' w-full h-screen bg-black/70'>
    <div className={
    !nav ?
    'hidden sm:hidden bg-[#3dad8c] w-2/5 h-screen ' :"fixed visible  sm:hidden  z-20 bg-gradient-to-r bg-white  to-[#1e1852] w-2/4 h-screen ease-in-duration"
    }
    >
<div className='fixed transparent  mx-2'>
<div>
    <div
        onClick={handleNav}
     className='relative rounded-full  left-40 shadow-xl w-12 sm:hidden '
    >
    <AiOutlineClose className='m-4  text-black inline' />
</div>
</div>

    <p className='text-white mx-4'>Tobi dey learn...</p>
    <p className='text-white mx-4'>Tobi dey come...</p>

<div className='sm:hidden mt-10'>
<ul className='flex flex-col relative text-center gap-8  p-3 cursor-pointer  tracking-wider'>
        <Link href='/'>
          <li className='sm:hidden text-[#1e1852]'>Me...</li>
        </Link>
        <Link href='/projects'>
          <li className='sm:hidden text-[#1e1852]  '>Projects</li>
        </Link>
        <Link href='/careers'>
          <li className='sm:hidden text-[#1e1852] '>Careers</li>
        </Link>
        <Link href='/contact'>
          <li className='sm:hidden text-[#1e1852] '>Contact</li>
        </Link>
        </ul>
{/* // </div> */}
{/* // </div> */}

{/* <div className='rounded-xl'>
    <Link href=''>
  <FaLinkedIn/>
    </Link>
</div>
<div className='rounded-xl w-'>
  
    <Link href=''>

  <FaGithub/>
    </Link>
</div> */}
    </div>

    {/* </div> */}
    </div>
    </div>
    </div>
  
    
    
    {/* </div> */}
</div>
 
  )
}

export default Navbar;


