import React from 'react'
import { Button } from './ui/button'
import { Eye, Minus, Plus, Trash, X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/cartSlice';
import { Link } from 'react-router-dom';

import CartItemRemovalDialog from './CartItemRemovalDialog';

function ResponsiveCart({ item, path }) {
    const dispatch = useDispatch();
    return (
        <div className='sm:hidden capitalize'>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <img src={item.imgList[0]} className="w-20 h-28 object-cover" />
                    <div>
                        <div className="flex flex-col items-end justify-between">
                            {item.discountedPrice
                                ? <div >
                                    <p className='text-gray-500 line-through'>{item.price.toFixed(2)} TL</p>
                                    <p className='text-red-500'>{item.discountedPrice.toFixed(2)} TL</p>
                                </div>
                                : <p className="font-medium">{item.price.toFixed(2)} TL</p>
                            }

                        </div>

                    </div>



                </div>

                <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">Beden: {item.size}</p>
                    <p className="text-sm text-gray-500">Renk: {item.color}</p>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex justify-between items-center mt-2">
                        <Button size="xs" className=" p-1 rounded-full" variant="outline" onClick={() => { dispatch(decreaseQuantity(item)) }}>
                            <Minus />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button size="xs" className="p-1 rounded-full" variant="outline" onClick={() => { dispatch(increaseQuantity(item)) }}>
                            <Plus />
                        </Button>
                    </div>
                    <CartItemRemovalDialog item={item} />
                    {/* <Trash size={20} strokeWidth={1.2} /> */}
                </div>
            </div>



        </div>
    )
}

export default ResponsiveCart