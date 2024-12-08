import { Link } from 'react-router-dom'
import React from 'react'

function Banner2() {
    return (
        <div className='flex w-full lg:w-3/4 flex-col md:flex-row gap-4 px-6 justify-center items-center m-auto py-10 
        '  >
            <Link className=' relative group text-3xl md:text-5xl font-semibold '  >
                <p className=' absolute text-center flex justify-center items-center inset-0 leading-normal '>
                    <span className='  group-hover:translate-y-3 transition-all duration-300'>Kadın</span>
                    <span className='font-normal translate-y-6 group-hover:translate-y-3 transition-all duration-300 
                    text-4xl md:text-6xl'>Sweatshirt</span></p>

                <img src="src\assets\banner_1.jpeg" className='w-full  h-[442px] sm:h-[496px] object-cover
               ' />
            </Link>
            <div className='flex flex-col gap-4 text-3xl font-semibold'>
                <Link className='relative group'>

                    <p className='absolute text-center flex justify-center items-center inset-0 leading-normal'>
                        <span className='group-hover:translate-y-2 transition-all duration-300'>Kadın</span>
                        <span className='font-normal translate-y-4 group-hover:translate-y-2 transition-all duration-300 
                        text-4xl '>Etek</span></p>
                    <img src="src\assets\banner_1.jpeg" className='w-full  sm:h-60 object-cover' />
                </Link>
                <Link className='relative group'>
                    <p className='absolute text-center flex justify-center items-center inset-0 leading-normal'>
                        <span className='group-hover:translate-y-2 transition-all duration-300'>Erkek</span>
                        <span className='font-normal translate-y-4 group-hover:translate-y-2 transition-all duration-300 
                         text-4xl '>Gömlek</span></p>
                    <img src="src\assets\banner_1.jpeg" className='w-full  sm:h-60 object-cover' />
                </Link>

            </div>
        </div>
    )
}

export default Banner2