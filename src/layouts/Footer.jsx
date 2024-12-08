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

function Footer() {
    return (
        <div className='w-full bg-gray-50'>
            <div className='text-sm flex flex-wrap  gap-8 justify-center pt-14 pb-5 md:px-14  lg:w-3/4 lg:justify-between lg:m-auto '>
                <div className='flex gap-1 '>
                    <span> <MessageCircle size={20} strokeWidth={1.5} /></span>
                    <p>Whatsapp</p>
                </div>
                <div className='flex gap-1'>
                    <span> <PhoneCall /></span>
                    <p>0850 123 45 67</p>
                </div>
                <div className='flex gap-1'>
                    <span> <Clock8 /></span>
                    <p>Çalışma saatleri: 08:00 - 00:00 </p>
                </div>
                <div className='flex gap-1'>
                    <span> <MailPlus /></span>
                    <p>bilgi@marketspan.com </p>
                </div>
            </div>
            <Separator />
            <div className="flex flex-col items-center justify-center py-10 gap-14 md:flex-row md:items-start md:px-14 lg:w-3/4 lg:justify-between lg:m-auto">
                <div className='w-56'>
                    <h4 className='text-base font-semibold pb-2' >APP'İ İNDİR</h4>
                    <div className='flex'>
                        <Link><img src="src\assets\pngwing.com (4).png" className='w-32 h-14 object-cover ' /></Link>
                        <Link><img src="src\assets\pngwing.com (4).png" className='w-32 h-14 object-cover' /></Link>
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

                <div className="flex flex-col w-56">
                    <h4 className='text-base font-medium pb-4'>YARDIM</h4>
                    <Link>Sipariş sorgulama</Link>
                    <Link>İade ve değişim</Link>
                    <Link>Sıkça sorulan sorular</Link>
                    <Link>Beden tablosu</Link>
                    <Link>Bize ulaşın</Link>
                </div>
                <div className="flex flex-col w-56">
                    <h4 className='text-base font-medium  pb-4'>FAVORİ KATEGORİLER</h4>
                    <Link>Kadın Kazak</Link>
                    <Link>Kadın Elbise</Link>
                    <Link>Kadın Etek</Link>
                    <Link>Erkek Gömlek</Link>
                    <Link>Erkek Ceket</Link>
                </div>

            </div>
        </div>

    )
}

export default Footer