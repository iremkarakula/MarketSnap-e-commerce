import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { ChevronDown, ChevronUp, Menu } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

function NavbarResponsive({ categories, toggleOpen, openCategory }) {
    return (
        <div >
            <Sheet >
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent className="overflow-y-auto">
                    < Button variant="ghost" className="block" >
                        <SheetClose asChild>
                            <Link to="/indirim" >İNDİRİM</Link>
                        </SheetClose>
                    </Button >
                    {categories.map((c) => {
                        return (<Collapsible onOpenChange={() => toggleOpen(c.name)}
                            open={openCategory === c.name ? true : false} >
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost">{c.name.toLocaleUpperCase()}
                                    {openCategory === c.name ? <ChevronUp /> : <ChevronDown />}
                                </Button>


                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {c.subcategories.map((s) => {
                                    const categoryPath = "/" + c.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, '')
                                        + "/" + s.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                            .replace(/[\u0300-\u036f]/g, '');
                                    return (<ul className='text-sm pl-6'>
                                        <li className='font-medium pt-2'><Link to={categoryPath}>{s.name}</Link></li>
                                        {s.subcategories.map((e) => {
                                            const subcategoryPath = categoryPath + "/" + e.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                            return (<li className='text-gray-800 capitalize'>
                                                <SheetClose asChild>
                                                    <Link to={subcategoryPath} >
                                                        {e}
                                                    </Link>
                                                </SheetClose>
                                            </li>)
                                        })}
                                    </ul>)
                                })}
                            </CollapsibleContent>
                        </Collapsible>

                        )
                    })}
                    < Button variant="ghost" className="block" >
                        <SheetClose asChild>
                            <Link to="/hediyekarti">HEDİYE KARTI</Link>
                        </SheetClose>
                    </Button >
                    < Button variant="ghost" className="block" >
                        <SheetClose asChild>
                            <Link to="/snapkart">SNAP KART</Link>
                        </SheetClose>
                    </Button >
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default NavbarResponsive


