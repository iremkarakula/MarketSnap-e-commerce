import CartItem from '@/components/CartItem'
import CartSummary from '@/components/CartSummary'
import { Button } from '@/components/ui/button';
import { clearCart } from '@/redux/cartSlice';
import { Trash2 } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Cart() {
    const items = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const q = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='w-full my-6 px-10 flex justify-center'>
            {items.length > 0 ?

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    <div className="lg:col-span-2">
                        <div className='flex justify-between items-center pb-6'>
                            <h2 className="text-2xl font-medium sm:mb-6">Sepetim ({q} Ürün)</h2>
                            {items.length > 0 &&
                                <Button variant="link" className=" text-xs text-gray-500 hidden sm:block" onClick={() => { dispatch(clearCart()) }}>Sepeti Temizle</Button>}
                            <Trash2 className='sm:hidden text-gray-700' size={20} strokeWidth={1} onClick={() => { dispatch(clearCart()) }} />
                        </div>

                        <div className="space-y-6">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>


                    <CartSummary items={items} />
                </div> : <h2 className="text-2xl font-medium mb-6 text-left">Sepetinizde ürün bulunmamaktadır.</h2>}
        </div>
    )
}

export default Cart