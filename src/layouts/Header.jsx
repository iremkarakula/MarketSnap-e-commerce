

import { Heart, Search, ShoppingBasket, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ManMenu from '../components/ManMenu';
import WomanMenu from '../components/WomanMenu';



const headerList = ["800 TL Üzeri Ücretsiz Kargo!", "Seçili Ürünlerde %40 İndirim!", "Üye Ol 200 TL Kazan!"];



function Header() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(pre => (pre + 1) % headerList.length);
        }, 2000);

        return () => clearInterval(interval);

    }, [])


    return (
        <div className='w-full'>

            <div className='flex justify-center items-center relative p-4 border-b-2'>

                <Link to="/">
                    <h1 className='text-4xl sm:text-5xl cursor-pointer'>Market SNAP</h1>
                </Link>

                <div className='text-base font-normal absolute right-8 lg:block hidden '>
                    <Link to="">{headerList[index]}</Link>
                </div>
            </div>
            <div className='flex px-8 py-4 item-center justify-between'>
                <div className='hidden md:flex gap-5 '>
                    <Link to="/indirim" className='text-red-500 '>İNDİRİM</Link >
                    <div className='relative group '>
                        <Link to="/erkek" className='' >ERKEK</Link >
                        <div className='absolute z-10 bg-white r-0 group-hover:block hidden'>
                            <ManMenu />
                        </div>
                    </div>
                    <div className='relative group'>
                        <Link to="/kadın">KADIN</Link >
                        <div className='absolute z-10 bg-white r-0 group-hover:block hidden'>
                            <WomanMenu />
                        </div>
                    </div>


                    <Link to="/giftcard">HEDİYE KARTI</Link >
                    <Link to="/snapcard">SNAP KART</Link >
                </div>

                <div className='flex gap-4'>
                    <Link>
                        <Heart size={20} strokeWidth={1.5} />
                    </Link>
                    <Link to="/login">
                        <User size={20} strokeWidth={1.5} />
                    </Link>
                    <Link>
                        <ShoppingBasket size={20} strokeWidth={1.5} />
                    </Link>



                </div>
            </div>



        </div >
    )
}

export default Header