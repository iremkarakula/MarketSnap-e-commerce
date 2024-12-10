

import { ChevronDown, ChevronUp, Heart, Menu, ShoppingBasket, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


import { Button } from '@/components/ui/button';
import categories from '../../category';



const headerList = ["800 TL Üzeri Ücretsiz Kargo!", "Seçili Ürünlerde %40 İndirim!", "Üye Ol 200 TL Kazan!"];



function Header() {
    const [index, setIndex] = useState(0);
    const [openCategory, setOpenCategory] = useState(null);

    const isAuthenticated = useSelector(store => store.user.isAuthenticated);
    const history = useHistory();


    const handleProfileClick = () => {
        isAuthenticated ? history.push("/profile/profilim") : history.push("/login")


    }
    const handleFavoritesClick = () => {
        isAuthenticated ? history.push("/favorites") : history.push("/login")
    }

    const toggleOpen = (title) => {
        openCategory === title ? setOpenCategory(null) : setOpenCategory(title);
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
                    <div >
                        <Sheet >
                            <SheetTrigger><Menu /></SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                {categories.map((c) => {
                                    return (c.subcategories.length > 0
                                        ? <Collapsible onOpenChange={() => toggleOpen(c.title)}
                                            open={openCategory === c.title ? true : false} >
                                            <CollapsibleTrigger asChild>
                                                <Button variant="ghost">{c.title.toLocaleUpperCase("TR-tr")}
                                                    {openCategory === c.title ? <ChevronUp /> : <ChevronDown />}
                                                </Button>


                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                {c.subcategories.map((s) => {
                                                    return (<ul className='text-sm pl-6'>
                                                        <li className='font-medium pt-2'>{s[0].title.toLocaleUpperCase("TR-tr")}</li>
                                                        {s.slice(1).map((e) => {
                                                            return (<li className='text-gray-800 capitalize'>
                                                                <SheetClose asChild>
                                                                    <Link to={`/${c.title.toLocaleLowerCase("TR-tr")}/${e.title.toLocaleLowerCase("TR-tr").replace(/\s+/g, '')}}`} >
                                                                        {e.title}
                                                                    </Link>
                                                                </SheetClose>
                                                            </li>)
                                                        })}
                                                    </ul>)
                                                })}
                                            </CollapsibleContent>
                                        </Collapsible>
                                        : <Button variant="ghost" className="block">
                                            <SheetClose asChild>
                                                <Link to={`/${c.title.toLocaleLowerCase("TR-tr").replace(/\s+/g, '')}`}>
                                                    {c.title.toLocaleUpperCase("TR-tr")}</Link>
                                            </SheetClose>
                                        </Button>)
                                })}
                            </SheetContent>
                        </Sheet>

                    </div>
                </div>

                <div className='text-base font-normal absolute right-8 lg:block hidden '>
                    <Link to="">{headerList[index]}</Link>
                </div>
            </div>

            <div className='flex justify-between py-2 items-center'>
                <div className='hidden md:flex justify-between items-center px-6  '>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {
                                categories.map((c) => {
                                    return (<NavigationMenuItem className='first:text-red-500 hover:first:text-red-500'>
                                        {c.subcategories.length > 0
                                            ? <div >
                                                <NavigationMenuTrigger>{c.title.toLocaleUpperCase("tr-TR")}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className='flex gap-4 p-6 '>
                                                        {c.subcategories.map((s) => {
                                                            return (
                                                                <div className='text-nowrap'>
                                                                    <li className='text-base font-medium
                                                                    rounded-md p-2 
                                                                    transition-colors duration-200 hover:bg-accent'>
                                                                        <NavigationMenuLink className=''>
                                                                            <Link to={`/${c.title.toLocaleLowerCase("tr-TR").replace(/\s+/g, '').replace(/[\u0300-\u036f]/g, '')}/${s[0].title.toLocaleLowerCase("tr-TR").replace(/\s+/g, '').replace(/[\u0300-\u036f]/g, '')}`}>
                                                                                {s[0].title.toLocaleUpperCase("tr-TR")}
                                                                            </Link>
                                                                        </NavigationMenuLink>

                                                                    </li>
                                                                    {s.slice(1).map((i) => {
                                                                        return <li className='text-sm font-medium rounded-md p-2 
                                                                    transition-colors duration-200 hover:bg-accent text-gray-600 hover:text-primary'>
                                                                            <NavigationMenuLink>
                                                                                <Link
                                                                                    to={`/${c.title.toLocaleLowerCase("TR-tr")}/${i.title.toLocaleLowerCase("TR-tr").replace(/\s+/g, '')}`}>{i.title.toLocaleUpperCase("tr-TR")}</Link>
                                                                            </NavigationMenuLink>
                                                                        </li>
                                                                    })}
                                                                </div>

                                                            )
                                                        })}

                                                    </ul>
                                                </NavigationMenuContent>
                                            </div>
                                            : <Link to={`/${c.title.toLocaleLowerCase("TR-tr").replace(/\s+/g, '')}`}>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>{c.title.toLocaleUpperCase("tr-TR")}</NavigationMenuLink>
                                            </Link>}
                                    </NavigationMenuItem>)
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>



                <div className='hidden md:flex pr-4 cursor-pointer'>
                    <div className='rounded-md p-2 hover:bg-accent'>
                        <Heart size={20} strokeWidth={1.5} onClick={handleFavoritesClick} />
                    </div>
                    <div className='rounded-md p-2 hover:bg-accent'>
                        <User size={20} strokeWidth={1.5} onClick={handleProfileClick} />
                    </div>
                    <Link to="/sepet" className='rounded-md p-2 hover:bg-accent'>
                        <ShoppingBasket size={20} strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </div >











    )
}

export default Header