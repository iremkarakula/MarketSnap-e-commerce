import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {
    Keyboard, Navigation, Pagination
} from 'swiper/modules';




function Banner() {
    return (

        <div className=' relative m-auto w-full lg:w-3/4  p-4 bg-cover bg-center text-4xl sm:text-6xl font-semibold lg:text-7xl '>
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
                    <p className='w-full h-[500px]  p-10
                        bg-[url("src/assets/banner_1.jpeg")] leading-normal   ' >

                        <span className="block ">SEÇİLİ</span>
                        <span className="block">ÜRÜNLERDE</span>
                        <span className="block">%50 İNDİRİM</span>
                    </p>
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