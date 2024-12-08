import React from 'react'
import { Shield, Bus, RefreshCcw, CreditCard } from 'lucide-react';

function WhyChooseUs() {
    return (
        <div className='bg-gray-100 w-full text-gray-500 text-sm flex flex-col gap-3 items-center py-6'>
            <div className='flex gap-2'>
                <span><Shield size={20} strokeWidth={1.5} /></span>
                <p>GÜVENLİ ALIŞVERİŞ</p>
            </div>
            <div className='flex gap-2'>
                <span><Bus size={20} strokeWidth={1.5} /></span>
                <p>800 TL VE ÜZERİ ÜCRETSİZ KARGO</p>
            </div>
            <div className='flex gap-2'>
                <span><RefreshCcw size={20} strokeWidth={1.5} /></span>
                <p>ÜCRETSİZ İADE & DEĞİŞİM</p>
            </div>
            <div className='flex gap-2'>
                <span> <CreditCard size={20} strokeWidth={1.5} /></span>
                <p>VADE FARKSIZ TAKSİT</p>
            </div>
        </div>
    )
}

export default WhyChooseUs