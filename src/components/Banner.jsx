import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import bannerPhoto from '../assets/banner-photo.jpg';

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
                    <div className='w-full h-[500px] bg-amber-100 leading-normal flex items-center justify-center' >
                        <div className='w-full md:w-[90%] xl:w-4/5 h-4/5 bg-green-900 z-10 flex flex-col justify-between space-y-6 relative'
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <div className='w-full bg-gray-100 z-20 '>
                                <div className='w-full md:w-2/3'>
                                    <p className='font-light text-lg py-2 text-center text-gray-800'>BAHAR 2025</p>
                                </div>

                            </div>
                            <div className='w-full md:w-2/3 h-full bg-gray-100 z-20 font-bold flex flex-col items-center justify-center px-4'>
                                <div className="w-3/4 h-1 bg-green-900 rounded-l-full mb-auto my-4 ml-auto" />
                                <span className="block text-2xl mb-2">SEÇİLİ</span>
                                <span className="block text-3xl mb-2">ÜRÜNLERDE</span>
                                <span className="block text-5xl mb-4 text-center ">
                                    <span className="inline-block bg-green-900 text-white px-2 py-1 mr-4 rounded-md 
                                    transform -rotate-3 mb-4 mt-2">%50</span>
                                    İNDİRİM
                                </span>
                                <div className="w-3/4 h-1 bg-green-900 rounded-r-full mt-auto my-4 mr-auto" />
                            </div>
                            <div className="z-40 absolute w-1/3 h-[95%] xl:rounded-t-full bottom-0 xl:right-[7%]
                                border-2 hidden md:block md:right-4">
                                <img
                                    src={bannerPhoto}
                                    className='object-cover w-full  h-full  xl:rounded-t-full bottom-0'
                                />
                            </div>


                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide className='' >
                    <p className='w-full h-[500px]  p-10 leading-normal 
                        bg-[url("src/assets/banner_1.jpeg")]   ' >
                        <span className="block">Son Moda </span>
                        <span className="block hyphens-manual">Koleksi&shy;yonlarla</span>
                        <span className='block'>Tanışın!</span>
                    </p>
                </SwiperSlide>
                <SwiperSlide >
                    <p className='w-full  h-[500px]  p-10 leading-normal 
                        bg-[url("src/assets/banner_1.jpeg")]  ' >
                        <span className="block">Stilinizi Yansıtacak</span>
                        <span className="block">Parçalar Burada!</span>
                    </p>
                </SwiperSlide>



            </Swiper>
        </div>

    )
}

export default Banner