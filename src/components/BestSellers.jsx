import React from 'react'
import MainPageProduct from './MainPageProduct'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function BestSellers() {
    return (
        <div className='w-full m-auto'>
            <h2 className='text-center text-4xl pt-20 font-semibold'>ÇOK SATANLAR</h2>
            <div className='w-full lg:w-3/4 p-4  m-auto'>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}

                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>
                    <SwiperSlide> <MainPageProduct /></SwiperSlide>

                </Swiper>




            </div>
        </div>
    )
}

export default BestSellers