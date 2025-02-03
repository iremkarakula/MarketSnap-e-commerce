import { Separator } from '@/components/ui/separator'
import { Clock8, Instagram, Facebook, Youtube, Twitter, MailPlus, MessageCircle, PhoneCall } from 'lucide-react'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from "react-router-dom"
import categories from '../../category'

import FooterAccordion from '@/components/FooterAccordion'
import android from "../../src/assets/android.png"
import apple from "../../src/assets/apple.png"

function Footer() {

    const snap = ["Kurumsal",
        "Mağazalarımız",
        "Gizlilik Politikasi",
        "Çerez Politikası",
        "Çerez Tercihleri",
        "Bayilik Başvurusu"];

    const communication = ["Bize Ulaşın",
        "Hesabım",
        "İade ve değişim",
        "Kargo Takibi",
        "Kariyer",
        "Yardım"]
    return (
        <div className='w-full bg-gray-50'>
            <div className='text-sm flex flex-col md:flex-row md:w-full lg:w-3/4 justify-center m-auto gap-6 p-6 '>
                <div className='flex gap-1 '>
                    <span> <MessageCircle size={20} strokeWidth={1.5} /></span>
                    <p>Whatsapp</p>
                </div>
                <div className='flex gap-1 '>
                    <span> <PhoneCall /></span>
                    <p>0850 123 45 67</p>
                </div>
                <div className='flex gap-1 '>
                    <span> <Clock8 /></span>
                    <p>Çalışma saatleri: 08:00 - 00:00 </p>
                </div>
                <div className='flex gap-1 '>
                    <span> <MailPlus /></span>
                    <p>bilgi@marketspan.com </p>
                </div>
            </div>
            <Separator />
            <div className="md:flex items-start gap-12 p-14 justify-center hidden ">
                <div className=''>
                    <h4 className='text-base font-semibold pb-2' >APP'İ İNDİR</h4>
                    <div className='flex'>
                        <Link><img src={android} className='w-36 h-14 object-cover' /></Link>
                        <Link><img src={apple} className='w-32 h-14 object-contain' /></Link>
                    </div>
                    <div className='flex gap-2 w-56 py-4'>
                        <Link><Instagram /></Link>
                        <Link><Facebook /></Link>
                        <Link><Youtube /></Link>
                        <Link><Twitter /></Link>


                    </div>
                    <div className="py-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="turkish">Türkçe</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='w-20 h-20 bg-black'>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-12'>
                    <div className='flex w-80 justify-between'>
                        <div className="">
                            <h1 className='text-2xl font-medium pb-4'>Market SNAP</h1>
                            <ul className='text-sm leading-5'>
                                {snap.map((e, i) => {
                                    return <li key={i}>
                                        <Link>{e}</Link>
                                    </li>
                                })}
                            </ul>

                        </div>
                        <div className="">
                            <h4 className='text-base font-medium pb-4'>YARDIM</h4>
                            <ul className='text-sm leading-5'>
                                {communication.map((e, i) => {
                                    return <li key={i}>
                                        <Link>{e}</Link>
                                    </li>
                                })}
                            </ul>

                        </div>
                    </div>


                    <div className='w-80 '>
                        <h4 className='text-base font-medium  pb-4'>KATEGORİLER</h4>
                        <div className='flex justify-between  text-sm leading-5'>
                            <ul className=''>

                                {categories[1].subcategories.map((e, i) => {
                                    const categoryPath = "/kadın/" + e.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, '');
                                    return <div>
                                        <li><Link to={categoryPath}>Kadın {e.name}</Link></li>
                                        {e.subcategories.map((x, y) => {
                                            const subcategoryPath = categoryPath + "/" + x.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                            return <li className='capitalize'><Link to={subcategoryPath}>Kadın {x}</Link></li>
                                        })}
                                    </div>
                                })
                                }

                            </ul>
                            <ul className=''>

                                {categories[0].subcategories.map((e, i) => {
                                    const categoryPath = "/erkek/" + e.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD')
                                        .replace(/[\u0300-\u036f]/g, '');
                                    return <div>
                                        <li><Link to={categoryPath}>Erkek {e.name}</Link></li>
                                        {e.subcategories.map((x, y) => {
                                            const subcategoryPath = categoryPath + "/" + x.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                            return <li className='capitalize'><Link to={subcategoryPath}>Erkek {x}</Link></li>
                                        })}
                                    </div>
                                })
                                }

                            </ul>
                        </div>



                    </div>

                </div>
            </div>
            <FooterAccordion snap={snap} communication={communication} categories={categories} />
        </div>

    )
}

export default Footer