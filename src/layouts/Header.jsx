

import { Heart, ShoppingBasket, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




import categories from '../../category';
import NavbarResponsive from '@/components/NavbarResponsive';
import Navbar from '@/components/Navbar';



const headerList = ["800 TL Üzeri Ücretsiz Kargo!", "Seçili Ürünlerde %40 İndirim!", "Üye Ol 200 TL Kazan!"];



function Header() {
    const [index, setIndex] = useState(0);
    const [openCategory, setOpenCategory] = useState(null);

    const isAuthenticated = useSelector(store => store.login.isAuthenticated);
    const { items } = useSelector(store => store.cart);
    const history = useHistory();


    const handleProfileClick = () => {
        isAuthenticated ? history.push("/profile/profilim") : history.push("/login")


    }
    const handleFavoritesClick = () => {
        isAuthenticated ? history.push("/favorites") : history.push("/login")
    }

    const toggleOpen = (name) => {
        openCategory === name ? setOpenCategory(null) : setOpenCategory(name);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(pre => (pre + 1) % headerList.length);
        }, 2000);

        return () => clearInterval(interval);

    }, [])




    return (
        <div className='w-full'>

            <div className='flex justify-between md:justify-center items-center relative p-4 border-b-2'>

                <Link to="/">
                    <h1 className='text-2xl sm:text-5xl'>Market SNAP</h1>
                </Link>

                <div className='flex items-center gap-4 md:hidden'>
                    <div className='flex gap-4 '>
                        <div>
                            <Heart size={15} strokeWidth={1.5} onClick={handleFavoritesClick} />
                        </div>
                        <div >
                            <User size={15} strokeWidth={1.5} onClick={handleProfileClick} />
                        </div>
                        <Link to="/sepet">
                            <ShoppingBasket size={15} strokeWidth={1.5} />
                        </Link>
                    </div>
                    <NavbarResponsive categories={categories} toggleOpen={toggleOpen} openCategory={openCategory} />
                </div>

                <div className='text-base font-normal absolute right-8 lg:block hidden '>
                    <Link to="">{headerList[index]}</Link>
                </div>
            </div>

            <div className='flex justify-between py-2 items-center'>
                <Navbar />



                <div className='hidden md:flex pr-4 cursor-pointer'>
                    <div className='rounded-md p-2 hover:bg-accent'>
                        <Heart size={20} strokeWidth={1.5} onClick={handleFavoritesClick} />
                    </div>
                    <div className='rounded-md p-2 hover:bg-accent'>
                        <User size={20} strokeWidth={1.5} onClick={handleProfileClick} />
                    </div>
                    <Link to="/sepet" className='relative rounded-md p-2 hover:bg-accent'>
                        {items.length > 0 && <div className='w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs absolute bottom-0 left-0'>{items.reduce((total, item) => (total + item.quantity), 0)}</div>}
                        <ShoppingBasket size={20} strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default Header