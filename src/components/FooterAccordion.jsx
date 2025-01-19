import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom'

function FooterAccordion({ snap, communication, categories }) {
    return (
        <div><Accordion type="single" collapsible className="w-full md:hidden p-6">
            <AccordionItem value="item-1">
                <AccordionTrigger>Market SNAP</AccordionTrigger>
                <AccordionContent>
                    <ul className='text-sm leading-5'>
                        {snap.map((e, i) => (
                            <li key={i}><Link to="#">{e}</Link></li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>YARDIM</AccordionTrigger>
                <AccordionContent>
                    <ul className='text-sm leading-5'>
                        {communication.map((e, i) => (
                            <li key={i}><Link to="">{e}</Link></li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>KATEGORİLER</AccordionTrigger>
                <AccordionContent>
                    <div className='flex justify-start gap-12 text-sm leading-5'>
                        <ul>

                            {categories[1].subcategories.map((e, i) => {
                                const categoryPath = "/kadın/" + e.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                    .replace(/[\u0300-\u036f]/g, '');
                                return <div>
                                    <li><Link to={categoryPath}>Kadın {e.name}</Link></li>
                                    {
                                        e.subcategories.map((x, y) => {
                                            const subcategoryPath = categoryPath + "/" + x.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                                            return <li className='capitalize'><Link to={subcategoryPath}>Kadın {x}</Link></li>
                                        })
                                    }
                                </div>
                            })}
                        </ul>
                        <ul>
                            {categories[0].subcategories.map((e, i) => {
                                const categoryPath = "/erkek/" + e.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                    .replace(/[\u0300-\u036f]/g, '');
                                return <div>
                                    <li><Link to={categoryPath}>Erkek {e.name}</Link></li>
                                    {
                                        e.subcategories.map((x, y) => {
                                            const subcategoryPath = categoryPath + "/" + x.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                            return <li className='capitalize'><Link to={subcategoryPath}>Erkek {x}</Link></li>
                                        })
                                    }
                                </div>
                            })}
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion></div>
    )
}

export default FooterAccordion