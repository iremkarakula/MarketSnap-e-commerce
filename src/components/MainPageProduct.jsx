import React, { useState } from 'react'
import { Button } from './ui/button';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { CircleCheck, Heart } from 'lucide-react';
import { toggleFavList } from '@/redux/userSlice';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { Separator } from './ui/separator';

const sizeSchema = z.object({
    size: z.enum(["S", "M", "L"], {
        message: "Lütfen beden seçiniz",
    })
})

function ProductComponent({ product }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showSize, setShowSize] = useState(false);
    const { favList } = useSelector(store => store.user);
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(sizeSchema) });



    const [isFavorite, setIsFavorite] = useState(() => {
        const favItem = favList.some(e => e.id === product.id);
        return favItem;
    });

    const path = "/" + product.gender_url + "/" + product.category_url + "/" + product.subcategory_url + "/" + product.id;

    const onSubmit = async (data) => {
        try {
            if (data.size) {
                await dispatch(addToCart({ ...product, quantity: 1, size: data.size }));
                toast(
                    <div>
                        <div className='flex gap-2 items-center'>

                            <CircleCheck />
                            <p>Sepete eklendi</p>
                        </div>

                        <Separator className="my-2" />
                        <div className='flex gap-4 items-start items-stretch capitalize py-1'>
                            <img
                                src={product.imgList[0]}
                                className=" object-cover w-24 h-32"
                            />
                            <div className='flex flex-col justify-between gap-2'>
                                <div >
                                    <p className='text-sm text-gray-800 '>{product.gender} {product.name}</p>
                                    <div className='flex gap-2 mt-1 mb-2'>
                                        <p className='text-xs text-gray-600'>Renk: {product.color}</p>
                                        <p className='text-xs text-gray-600'>Beden: {data.size}</p>
                                    </div>

                                    <p className='font-medium'>{product.discountedPrice.toFixed(2) || product.price.toFixed(2)} TL</p>


                                </div>
                                <Button onClick={() => {
                                    history.push('/sepet')
                                }} className="text-xs py-2" size="xs">
                                    Sepete Git
                                </Button>
                            </div>


                        </div>


                    </div>

                )
            }

        } catch (error) {
            console.error("Error adding product to cart: ", error);
        }



    }


    const handleFav = (e) => {
        e.preventDefault();
        dispatch(toggleFavList(product))
        setIsFavorite(!isFavorite);

    }
    const handleAddToCart = () => {
        setShowSize(true);
    }



    return (
        <div className='m-2 sm:m-4 space-y-4 pb-10'>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div className='group relative text-center'>
                    <Link to={path} className="space-y-2">
                        <img src={product.imgList[0]} className='w-full aspect-[3/4] object-cover
                   group-hover:brightness-75 transition-brightness duration-200 ' />
                    </Link>

                    {product.isDiscount && <div className='absolute top-[5%] bg-red-500 w-fit py-1 px-2 rounded-r text-white font-semibold text-xs md:text-base' >%{product.discountRate}</div>}

                    <div className='font-bold text-lg md:text-xl w-full absolute bg-white bottom-[10%] py-2 
                    opacity-0 group-hover:opacity-90  transition-all duration-200'>Ürünü İncele</div>
                    <button
                        onClick={handleFav}
                        className="absolute top-[2%] right-2 p-2 rounded-full bg-white bg-opacity-60 group-hover:bg-opacity-100 transition-all duration-200"
                        aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
                    >
                        <Heart
                            size={20}
                            className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                            strokeWidth={1.5}
                        />
                    </button>
                    {
                        showSize && <div className="flex space-x-4 justify-center absolute bottom-0 bg-white w-full py-6">
                            {["S", "M", "L"].map((size) => {
                                return <label key={size}>
                                    <input type='radio' value={size} {...register("size")} className='peer sr-only' />
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex justify-center items-center text-gray-700 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground'>
                                        {size}
                                    </div>
                                </label>

                            })}
                        </div>
                    }

                </div>

                <div className='capitalize flex flex-col justify-between  h-16 '>
                    <h3 className='text-sm md:text-base'>{product.title}</h3>
                    <div className=' flex flex-col sm:flex-row sm:items-center sm:gap-2'>
                        <span className={product.isDiscount ? 'opacity-50 line-through text-xs md:text-sm' : 'text-sm md:text-base'}>{product.price.toFixed(2)} TL</span>
                        <div className='space-x-1 text-sm md:text-base'>
                            {product.isDiscount && <span className='text-red-500'>{product.discountedPrice.toFixed(2)} TL</span>}
                            {product.isDiscount && <span className='text-red-500 font-semibold'>%{product.discountRate}</span>}
                        </div>

                    </div>

                </div>






                <Button className="w-full" type="submit" onClick={handleAddToCart}>Sepete Ekle</Button>
            </form>

        </div>

    )
}

export default ProductComponent