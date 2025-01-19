import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'
import categories from '../../category'


function Navbar() {




    return (
        <div className="hidden md:flex justify-between items-center px-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className='flex' >
                        <Link to="/indirim" className="text-red-500">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>İNDİRİM</NavigationMenuLink>
                        </Link>

                        {categories.map(c => (

                            <NavigationMenuItem >
                                <NavigationMenuTrigger >{c.name.toLocaleUpperCase("tr-TR")}</NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <ul className='flex p-6 gap-4 items-start'>
                                        {c.subcategories.map((e, i) => {
                                            const categoryPath = "/" + c.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                                .replace(/[\u0300-\u036f]/g, '')
                                                + "/" + e.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                                    .replace(/[\u0300-\u036f]/g, '');

                                            return (
                                                <div className="min-w-[130px]">
                                                    <li>
                                                        <NavigationMenuLink asChild>
                                                            <Link
                                                                to={categoryPath}
                                                                className="block text-sm font-medium rounded-md p-2 transition-colors duration-200 hover:bg-accent w-full"
                                                            >
                                                                {e.name.toLocaleUpperCase("tr-TR")}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                    {e.subcategories.map((x, index) => {
                                                        const subcategoryPath = categoryPath + "/" + x.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                                        return (
                                                            <li >
                                                                <NavigationMenuLink asChild>
                                                                    <Link
                                                                        to={subcategoryPath}
                                                                        className="block text-sm font-medium rounded-md p-2 transition-colors duration-200 hover:bg-accent hover:text-black text-gray-500 w-full"
                                                                    >
                                                                        {x.toLocaleUpperCase("tr-TR")}
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                        <Link to="/hediyekarti">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>HEDİYE KARTI</NavigationMenuLink>
                        </Link>
                        <Link to="/snapkart">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>SNAP KART</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default Navbar




