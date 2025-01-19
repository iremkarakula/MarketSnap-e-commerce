import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Insta() {
    return (
        <div className='w-full flex flex-col items-center p-4' >
            <h2 className='text-center text-3xl pt-20 font-semibold py-4'>#iLoveSNAP</h2>

            <div div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 w-full lg:w-3/4" >
                <img src="src\assets\mainpage\instagram1.jpg" className='object-cover lg:h-[400px] h-[300px] w-full' />
                <img src="src\assets\mainpage\instagram2.jpg" className='object-cover lg:h-[400px] h-[300px]  w-full' />
                <img src="src\assets\mainpage\instagram3.jpg" className='object-cover lg:h-[400px] h-[300px] w-full col-span-2' />
                <img src="src\assets\mainpage\instagram1.jpg" className="object-cover h-full w-full row-span-2 row-start-2 " />
                <img src="src\assets\mainpage\instagram2.jpg" className="object-cover lg:h-[400px] h-[300px] w-full col-span-2 row-start-2 " />
                <img src="src\assets\mainpage\instagram3.jpg" className="object-cover h-full w-full col-start-4 row-start-2 row-span-2 " />
                <img src="src\assets\mainpage\instagram4.jpg" className="object-cover lg:h-[400px] h-[300px] w-full col-start-2 row-start-3 " />
                <img src="src\assets\mainpage\instagram5.jpg" className="object-cover lg:h-[400px] h-[300px] w-full col-start-3 row-start-3 " />
            </div >
            <div div className="md:hidden grid grid-cols-2 grid-rows-4 gap-4" >
                <img src="src\assets\mainpage\instagram1.jpg" className='object-cover h-[200px] w-full ' />
                <img src="src\assets\mainpage\instagram1.jpg" className='object-cover row-span-2 h-full w-full' />
                <img src="src\assets\mainpage\instagram2.jpg" className='object-cover row-span-2 row-start-2 h-full w-full' />
                <img src="src\assets\mainpage\instagram3.jpg" className='object-cover col-start-2 row-start-3 h-[200px] w-full' />
                <img src="src\assets\mainpage\instagram2.jpg" className="object-cover col-start-1 row-start-4 col-span-2 h-[200px] w-full" />

            </div >


            <div className="flex w-full sm:max-w-sm items-center space-x-2 m-auto py-14 px-4">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Bizi Takip Et!</Button>
            </div>

        </div >
    )
}

export default Insta