import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Insta() {
    return (
        <div>
            <h2 className='text-center text-3xl pt-20 font-semibold py-4'>#iLoveSNAP</h2>

            <div className='flex flex-wrap px-4 justify-center lg:grid lg:grid-cols-4 lg:w-3/4 gap-4  m-auto py-4'>
                <img src="./src/assets/banner_1.jpeg" alt="" className='col-span-1 row-span-1 w-full h-full object-cover
                sm:w-2/5 lg:w-full ' />
                <img src="./src/assets/banner_1.jpeg" alt="" className='w-full h-full col-span-1 row-span-1 object-cover
                 sm:w-2/5 lg:w-full' />
                <img src="./src/assets/banner_1.jpeg" alt="" className='col-span-1 row-span-2 w-full h-full object-cover
                 sm:w-2/5 lg:w-full' />
                <img src="./src/assets/banner_1.jpeg" alt="" className='col-span-1 row-span-1 w-full h-full object-cover
                 sm:w-2/5 lg:w-full' />
                <img src="./src/assets/banner_1.jpeg" alt="" className='col-span-2 row-span-1 w-full h-full object-cover
                 sm:w-2/5 lg:w-full' />
                <img src="./src/assets/banner_1.jpeg" alt="" className='w-full h-full col-span-1 row-span-1 object-cover
                 sm:w-2/5 lg:w-full' />
            </div>
            <div className="flex w-full sm:max-w-sm items-center space-x-2 m-auto py-14 px-4">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Bizi Takip Et!</Button>
            </div>

        </div>
    )
}

export default Insta