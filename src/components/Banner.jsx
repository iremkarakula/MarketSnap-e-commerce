import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import bannerPhoto from '../assets/banner-photo.jpg';
import banner1 from "../assets/rb.png"
import banner2 from "../assets/adult-female-with-shopping-bags-posing-b.png"
import {
    Keyboard, Navigation, Pagination
} from 'swiper/modules';




function Banner() {
    return (

        <div className=' relative m-auto w-full lg:w-4/5  p-4 bg-cover bg-center text-4xl sm:text-6xl font-semibold lg:text-7xl my-4 '>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper absolute "
            >
                <SwiperSlide>
                    <div className='w-full h-[500px] bg-indigo-200 leading-normal flex items-center justify-center relative   ' >
                        <div className='w-full md:w-[90%] xl:w-4/5 h-4/5 bg-indigo-500 z-10 flex flex-col justify-between space-y-6 '
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>

                            <div className='w-full md:w-2/3 h-full bg-gray-100 z-20 font-bold flex flex-col items-center justify-center px-4 '>
                                <div className="w-3/4 h-1 bg-indigo-900 rounded-l-full mb-auto my-4 ml-auto" />
                                <span className="block text-2xl mb-2">SEÇİLİ</span>
                                <span className="block text-3xl mb-2">ÜRÜNLERDE</span>
                                <span className="block text-5xl mb-4 text-center ">
                                    <span className="inline-block bg-indigo-900 text-white px-2 py-1 mr-4 rounded-md 
                                    transform -rotate-3 mb-4 mt-2">%50</span>
                                    İNDİRİM
                                </span>
                                <div className="w-3/4 h-1 bg-indigo-900 rounded-r-full mt-auto my-4 mr-auto" />
                            </div>






                        </div>
                        <img src={banner1} className='absolute hidden md:block md:right-[5%] lg:right-[15%] bottom-0  h-[450px]  object-contain z-20' />


                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="w-full h-[500px] bg-[#bcdbdf] inline-flex items-center justify-center relative">
                        <div className='w-full md:w-[88%] xl:w-4/5 h-4/5 bg-[#bcdbdf] z-10 relative
                         bg-[url("src/assets/5587943.jpg")] bg-top px-4 flex flex-col justify-center items-center'
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <h1 className="  md:absolute md:top-10 md:left-10 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-none text-center ">
                                <span className="block transform -rotate-3 md:translate-x-3 bg-[#8aacff] px-4 py-2 mb-4">Stilinizi</span>
                                <span className="block transform rotate-3 md:translate-x-8 translate-y-2 px-4 py-2 text-slate-700 bg-yellow-100 mb-4">Yansıtacak</span>
                                <span className="block transform -rotate-3 md:translate-x-5 translate-y-3  px-4 py-2 bg-[#626fe6] ">Parçalar Burada!</span>
                            </h1>

                        </div>
                        <div className='hidden md:block h-4/5 '>
                            <img src={banner2} className='absolute -bottom-8 lg:bottom-0 -right-32 lg:right-0 h-full object-contain z-20 ' />
                        </div>


                    </div>

                </SwiperSlide>



            </Swiper>
        </div >

    )
}

export default Banner