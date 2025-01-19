import React from 'react'
import posts from "../../posts"
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom"

function Blogs() {
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold py-6'>MODA VE STİL BLOĞU</h2>
            <div>
                {
                    posts.map((e) => {
                        const shortText = e.text.substring(0, 350);
                        return <div className='flex flex-col md:flex-row gap-12 justify-center items-stretch py-12 px-6 lg:px-12'>
                            <img src={e.img} className='w-full md:w-72 aspect-[1] object-cover rounded' />
                            <div className='w-full p-4'>
                                <h3 className='text-xl font-semibold'>{e.title}</h3>
                                <p className='py-4'>{shortText}...</p>
                                <Link to={`/post/${e.id}`}>
                                    <Button variant="outline" className='cursor-pointer'>Devamını oku</Button>
                                </Link>
                            </div>

                        </div>

                    })
                }
            </div>

        </div>
    )
}

export default Blogs