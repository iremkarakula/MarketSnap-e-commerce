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
                        return <div className='flex gap-12 justify-center py-12'>
                            <img src='src\assets\banner_1.jpeg' className='w-72 object-cover rounded' />
                            <div className='w-1/3 p-4'>
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