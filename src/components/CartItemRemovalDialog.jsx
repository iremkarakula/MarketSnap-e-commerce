import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/redux/cartSlice'
import { addToFavList } from '@/redux/userSlice'

function CartItemRemovalDialog({ item }) {
    const dispatch = useDispatch();

    return (
        <div><Dialog className=" w-full max-w-sm ">
            <DialogTrigger><Button className="text-gray-500 hover:text-gray-700" variant="outline">
                <X className="h-5 w-5" />
            </Button></DialogTrigger>
            <DialogContent>
                <DialogHeader className="space-y-4 py-4">
                    <DialogDescription className="text-center">
                        Ürünü sepetten çıkarmak istediğinize emin misiniz?
                    </DialogDescription>
                    <div className='flex flex-col sm:flex-row gap-2 m-auto'>
                        <Button variant="outline" className='font-light w-40'
                            onClick={() => {
                                dispatch(removeFromCart(item));
                                dispatch(addToFavList(item));
                            }}>Sil ve Favorilere Ekle</Button>
                        <Button className='font-light w-40' onClick={() => dispatch(removeFromCart(item))}>Sil</Button>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog></div>
    )
}

export default CartItemRemovalDialog