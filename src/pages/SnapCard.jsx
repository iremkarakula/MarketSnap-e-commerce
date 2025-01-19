import { BadgePercent, CircleCheck, CircleUserRound, PartyPopper, Percent, ShoppingBag, Smartphone, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { useSelector } from 'react-redux';

function SnapCard() {
    const { isAuthenticated } = useSelector(store => store.login);
    const path = isAuthenticated ? "/profile/snapkartım" : "/register";

    return (
        <div>
            <h2 className='text-center text-3xl sm:text-4xl py-10 px-4  font-semibold'>Market Snap kartının avantajlarını keşfedin</h2>
            <div className='flex flex-col md:flex-row gap-8 justify-center items-center rounded pb-14'>
                <div className=' w-80'>
                    <div className='flex flex-col items-center justify-center p-8 gap-4' >
                        <BadgePercent strokeWidth={0.75} size={70} />
                        <p className='text-center'>Tüm sezon boyunca yaptığınız alışverişlerde %5 puan kazanabilirsiniz.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-8 gap-4'>
                        <ShoppingBag strokeWidth={0.75} size={70} />
                        <p className='text-center'>Kişiye özel ekstra puanlar kazanarak, sonraki alışverişlerinizde bu puanları kullanabilirsiniz.</p>
                    </div>
                </div>
                <div className=' w-80 flex flex-col gap-6 items-center justify-center'>
                    <img src="src\assets\banner_1.jpeg" alt="" className='w-80 h-96 object-cover ' />
                    <Link to={path} className='underline underline-offset-2 cursor-pointer font-medium'>Hemen üye ol</Link>
                </div>
                <div className=' w-80'>
                    <div className='flex flex-col items-center justify-center p-8 gap-4' >
                        <PartyPopper strokeWidth={0.75} size={70} />
                        <p className='text-center'>Doğum gününüzde özel indirimden yararlanabilirsiniz.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-8 gap-4' >
                        <Star strokeWidth={0.75} size={70} />
                        <p className='text-center'>En yeni haberler ve fırsatlar hakkında ilk siz bilgilendirilirsiniz.</p>
                    </div>
                </div>
            </div>
            <div className='w-full py-14  bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 flex flex-col items-center'>
                <h4 className='w-full md:w-3/4 pb-4 px-4 text-center font-semibold text-lg sm:text-2xl'>Market Snap uygulamasını indirerek, Snap kart puanlarınızı ve kampanyalarınızı kolayca takip edebilirsiniz.</h4>
                <p className='w-full md:w-3/4 px-4 text-center text-base sm:text-md'>Market Snap uygulamasıyla, biriken puanlarınızı, alışveriş geçmişinizi, size özel kampanyaları ve uygulamadaki tüm yenilikleri kolayca takip edebilirsiniz.</p>
            </div>
            <div className='py-16 flex flex-col items-center justify-center gap-8'>
                <h4 className=' w-full md:w-3/4 px-4 text-center font-medium text-lg sm:text-xl'>Market Snap uygulamasını indirmek için buraya tıklayın veya QR kodu ile okutun.</h4>
                <div className='w-40 h-40 bg-black'>

                </div>
                <div className='flex gap-10 justify-center py-4'>
                    <IoLogoAppleAppstore className='w-10 h-10  ring-1 ring-offset-8 rounded  ring-gray-400' />
                    <FaGooglePlay className='w-10 h-10  ring-1 ring-offset-8 rounded  ring-gray-400' />
                </div>
                <div className='w-full py-16 px-4 bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200'>
                    <h4 className=' py-8  text-center font-semibold text-xl sm:text-2xl'>Snap kartınızı marketsnap.com üyeliğinize tanımlamak için şu adımları takip edebilirsiniz.</h4>
                    <div className='flex flex-col sm:flex-row gap-8 items-center justify-center py-8 '>
                        <div className='w-72 flex flex-col items-center justify-center gap-4'>
                            <CircleUserRound strokeWidth={0.5} size={70} />
                            <p className='text-center'>Üye girişi yapın ve 'Profilim' ekranındaki 'Snap Kartım' sayfasına tıklayın.</p>
                        </div>
                        <div className='w-72 flex flex-col items-center justify-center gap-4'>
                            <Smartphone strokeWidth={0.5} size={70} />
                            <p className='text-center'>Açılan ekranda Snap kart numaranızı girin ve cep telefonunuza gönderilen güvenlik kodunu yazın.</p>
                        </div>
                        <div className='w-72 flex flex-col items-center justify-center gap-4'>
                            <CircleCheck strokeWidth={0.5} size={70} />
                            <p className='text-center'>Snap kart bilgilerini profilime ekle seçeneğini onaylayın ve eşleştirme işlemini tamamlayın.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SnapCard 