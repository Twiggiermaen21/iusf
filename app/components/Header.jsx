import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div className='flex  justify-center items-center w-full fixed top-3'>
            <nav className='flex gap-5 px p-0.5 border border-black bg-przewodni backdrop-blur rounded-full'>
                <a href="">

                    <Image src={assets.logo} alt='logo' className='w-10 cursor-pointer  rounded-full' />
                </a>
                <a href="" className='nav-item'>Home</a>
                <a href="" className='nav-item'>About</a>
                <a href="" className='nav-item'>Services</a>
                <a href="" className='nav-item bg-white text-black hover:bg-black hover:text-white'>Contact</a>
            </nav>
        </div>
    )
}

export default Header