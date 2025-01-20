import { Button } from '@/components/ui/button';
import { products } from '@/products';
import { addToCart } from '@/redux/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import BreadCrumb from '@/components/BreadCrumb';
import { useState } from 'react';


const sizeSchema = z.object({
    size: z.enum(["S", "M", "L"], {
        message: "Lütfen beden seçiniz",
    })
})



function ProductDetails() {
    const dispatch = useDispatch();
    const { gender, id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(sizeSchema) });
    const [imgIndex, setImgIndex] = useState(0);


    const product = products.find((p) => {
        return (p.gender_url === gender
            && p.id === Number(id))
    });

    if (!product) {
        return <h2 className=' text-2xl font-medium capitalize '>Ürün bulunamadı :(</h2>
    }

    const onSubmit = (data) => {
        dispatch(addToCart({ ...product, size: data.size, quantity: 1 }));
    };

    const handleImg = (index) => {
        setImgIndex(index);
    }






    return (
        <div className='w-full p-6 space-y-6'>
            <BreadCrumb />
            <div className='flex flex-col md:flex-row gap-6 '>
                <div className='hidden lg:flex gap-4 '>
                    <div className='gap-3 h-[520px] flex flex-col'>
                        {product.imgList.map((img, i) => {
                            return <img
                                key={i}
                                src={img}
                                className={`w-20 h-1/4  object-cover cursor-pointer  ${imgIndex === i ? "border border-gray-700" : ""}`}
                                onClick={() => handleImg(i)} />
                        })}
                    </div>
                    <div className='h-[520px]'>
                        <img src={product.imgList[imgIndex]} alt="" className='w-[400px] h-full  object-cover' />
                    </div>
                </div>
                <div className='lg:hidden sm:w-1/2 '>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {product.imgList.map((img, i) => {
                            return <SwiperSlide key={i}>
                                <img src={img} alt=""
                                    className='object-cover w-full  aspect-[3/4] ' />
                            </SwiperSlide>
                        })}

                    </Swiper>

                </div>
                <div className=' capitalize space-y-3'>
                    <h2 className='text-2xl font-medium'>{product.gender} {product.name}</h2>
                    <div className='space-y-2'>
                        <p className='opacity-80 text-sm'>{product.category} / {product.subcategory}</p>

                        <p className='opacity-80 text-sm flex items-center gap-2'>
                            Renk: {product.color}
                        </p>

                    </div>

                    <p className='space-x-2  text-sm md:text-base'>
                        <span className={product.isDiscount ? 'opacity-50 line-through' : ''}>{product.price.toFixed(2)} TL</span>
                        {product.isDiscount && <span className='text-red-500 text-base'>{product.discountedPrice.toFixed(2)} TL</span>}
                        {product.isDiscount && <span className='text-red-500 text-base font-semibold'>%{product.discountRate}</span>}
                    </p>
                    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-3'>
                            <label htmlFor='size' className='text-gray-700'>
                                Beden seçiniz
                            </label>
                            <div className='flex space-x-4'>
                                {["S", "M", "L"].map((size) => {
                                    return <label key={size}>
                                        <input type='radio' value={size} {...register("size")} className='peer sr-only' />
                                        <div className='w-12 h-12 rounded-full border-2 border-gray-300 flex justify-center items-center text-gray-700 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground'>
                                            {size}
                                        </div>
                                    </label>

                                })}
                            </div>
                            {errors.size && <p className='text-red-500 font-medium text-sm'>{errors.size.message}</p>}

                        </div>

                        <Button type="submit" >Sepete Ekle</Button>



                    </form>









                </div >
            </div>

        </div >
    )
}

export default ProductDetails