import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CardAd() {
    return (
        <div>
            <div className='w-full py-14 px-4 bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 flex flex-col items-center text-center gap-4'>
                <h4 className='text-lg sm:text-xl'>ŞİMDİ MARKET SNAP'E ÜYE OL</h4>
                <p className='font-semibold text-3xl sm:text-4xl'>200 TL HEDİYE KAZAN</p>
                <p className='text-base'>Ayrıca 100 TL ve Üzeri <span className='block'>İlk Sezon Alışverişinde <span className='font-semibold'>50 TL Hediye!</span></span></p>
                <p className='text-sm sm:text-base font-light'>Hem kazanın, hem de alışverişin keyfini çıkarın!</p>
                <Link to="/register" className="point-cursor text-sm font-normal">Hemen Üye Ol </Link>
            </div>
        </div>
    )
}

export default CardAd