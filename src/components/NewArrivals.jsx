
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MainPageProduct from './MainPageProduct';
import { products } from '@/products'

function NewArrivals() {

    return (
        <div className='w-full m-auto'>
            <h2 className='text-center text-4xl pt-20 font-semibold'>YENİ GELENLER</h2>
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
                > {products.map((product, index) => {


                    return <SwiperSlide key={product.id} > <MainPageProduct product={product} /></SwiperSlide>
                })}

                </Swiper>




            </div>

        </div >

    )
}

export default NewArrivals