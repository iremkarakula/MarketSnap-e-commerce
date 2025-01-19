import React from 'react'
import { Button } from './ui/button'
import { Minus, Plus, X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '@/redux/cartSlice';
import { Link } from 'react-router-dom';

import CartItemRemovalDialog from './CartItemRemovalDialog';
import ResponsiveCart from './ResponsiveCart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const path = "/" + item.gender_url + "/" + item.category_url + "/" + item.subcategory_url + "/" + item.id;
    return (
        <div >
            <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-4 border-b pb-4 hidden sm:flex">
                <img src={item.imgList[0]} className="w-20 md:w-24 h-28 md:h-32 object-cover" />
                <div className='flex justify-between w-full capitalize'>
                    <div className="flex-grow">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">Beden: {item.size}</p>
                        <p className="text-sm text-gray-500">Renk: {item.color}</p>

                        <div className="flex items-center mt-2">
                            <Button size="xs" className=" p-1 rounded-full" variant="outline" onClick={() => { dispatch(decreaseQuantity(item)) }}>
                                <Minus />
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button size="xs" className="p-1 rounded-full" variant="outline" onClick={() => { dispatch(increaseQuantity(item)) }}>
                                <Plus />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        {item.discountedPrice
                            ? <div className='flex gap-4'>
                                <p className='text-gray-500 line-through'>{item.price.toFixed(2)}</p>
                                <p>{item.discountedPrice.toFixed(2)}</p>
                            </div>
                            : <p className="font-medium">{item.price.toFixed(2)} TL</p>
                        }
                        <CartItemRemovalDialog item={item} />

                        <Link to={path} className='text-sm font-normal underline underline-offset-2'>Ürünü İncele</Link>
                    </div>
                </div>


            </div>

            <ResponsiveCart item={item} path={path} />
        </div >
    )
}

export default CartItem