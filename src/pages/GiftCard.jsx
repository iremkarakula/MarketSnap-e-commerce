import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

function GiftCard() {
    const [giftValue, setGiftValue] = useState(null);
    const [giftMessage, setGiftMessage] = useState('');

    const giftPrice = [150, 200, 250];




    return (
        <div className='flex gap-20 justify-center py-10'>
            <img src="src\assets\banner_1.jpeg" alt="" className='w-[470px] h-[370px] object-cover' />
            <div>
                <h2 className='text-center text-4xl py-4 font-semibold'>Market Snap Hediye Kartı</h2>

                <p>En özel anlara, en anlamlı hediye...</p>
                <div>
                    <form className='flex gap-6 py-4'>
                        {giftPrice.map((e, i) => {
                            return <div className='cursor-pointer' >
                                <input
                                    type="radio"
                                    name="gift"
                                    id={`price${i + 1}`}
                                    className="hidden peer"
                                    value={e}
                                    onChange={(event) => { setGiftValue(event.target.value) }}
                                />
                                <label
                                    htmlFor={`price${i + 1}`}
                                    className='peer-checked:bg-black peer-checked:text-white bg-transparent text-black font-medium
                                    inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
                                >
                                    {e}
                                </label>
                            </div>
                        })}
                    </form>
                    {giftValue && <p>Seçilen hediye tutarı: {giftValue} TL</p>}
                    <div className='pt-6'>
                        <Label htmlFor="message" >Göndermeden önce bir mesaj eklemek ister misiniz?</Label>

                        <Textarea id="message" placeholder="Mesajınız" className='my-2' value={giftMessage}
                            onChange={(e) => setGiftMessage(e.target.value)} />
                        <Button className='my-2 cursor-pointer'>SEPETE EKLE</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GiftCard