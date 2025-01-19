import React from 'react'
import { Button } from './ui/button';
import { useSelector } from 'react-redux';


function CartSummary({ items }) {
    const { subtotal, shipping, total } = useSelector(store => store.cart)

    return (
        <div className="bg-gray-50 p-2 rounded-lg w-full lg:w-80">
            <h2 className="text-lg font-medium mb-4">Sipariş Özeti</h2>
            <div className="space-y-2 mb-4 ">
                <div className="flex justify-between">
                    <span>Ara Toplam</span>
                    <span>{subtotal.toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between">
                    <span>Kargo</span>
                    <span>{shipping === 0 ? 'Ücretsiz' : `${shipping.toFixed(2)} TL`}</span>
                </div>
            </div>
            <div className="flex justify-between font-medium text-lg border-t py-4">
                <span >Toplam</span>
                <span>{total.toFixed(2)} TL</span>
            </div>
            <Button >
                Alışverişi Tamamla
            </Button>
        </div>
    )
}

export default CartSummary