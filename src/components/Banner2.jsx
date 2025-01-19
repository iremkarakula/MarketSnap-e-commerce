import { Link } from 'react-router-dom'
import React from 'react'

function Banner2() {
    return (
        <div className='w-full grid grid-row-2 md:grid-cols-2 gap-4 px-6  py-10  text-3xl md:text-4xl lg:text-6xl font-semibold text-white'  >
            <Link className='relative group'
                to="/kadın/ust-giyim/sweatshirt" >
                <p className='absolute flex justify-center items-center inset-0 leading-normal z-10'>
                    <span className='group-hover:translate-y-3 transition-all duration-300'>Kadın</span>
                    <span className='font-normal translate-y-6 group-hover:translate-y-3 transition-all duration-300 
                '>Sweatshirt</span></p>
                <img src="src\assets\mainpage\woman_s2_b2.jpg" className='w-full brightness-75  h-[442px] sm:h-[496px] object-cover' />

            </Link>
            <div className='flex flex-col gap-4 lg:text-5xl'>
                <Link className='relative group'
                    to="/kadın/alt-giyim/etek">

                    <p className='absolute flex justify-center items-center inset-0 leading-normal z-10'>
                        <span className='group-hover:translate-y-2 transition-all duration-300'>Kadın</span>
                        <span className='font-normal translate-y-4 group-hover:translate-y-2 transition-all duration-300 
                    '>Etek</span></p>
                    <img src="src\assets\mainpage\woman_s3_b2.jpg" className='w-full brightness-50 sm:h-60 object-cover' />
                </Link>
                <Link className='relative group ' to="/erkek/ust-giyim/gomlek">
                    <p className='absolute flex justify-center items-center inset-0 leading-normal z-10'>
                        <span className='group-hover:translate-y-2 transition-all duration-300'>Erkek</span>
                        <span className='font-normal translate-y-4 group-hover:translate-y-2 transition-all duration-300 
                         '>Gömlek</span></p>
                    <img src="src\assets\mainpage\man_s_b2.jpg" className='w-full brightness-50 sm:h-60 object-cover' />
                </Link>

            </div>
        </div>
    )
}

export default Banner2