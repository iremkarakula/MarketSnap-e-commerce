import { Link } from 'react-router-dom'
import React from 'react'
import posts from "../../posts"

function BlogCard({ id, title, text }) {
    const shortText = text.substring(0, 250);


    return (
        <div className='w-72 h-80 bg-[url(./src/assets/banner_1.jpeg)] bg-center overflow-hidden'>
            <Link key={id} to={`/post/${id}`}>
                <div className='bg-white h-full w-full  translate-y-3/4 bg-opacity-70 hover:translate-y-0 hover:bg-opacity-90
            transition ease-in-out duration-500 cursor-pointer'>
                    <h3 className='text-xl font-semibold p-4 h-1/4'>{title}</h3>
                    <p className='text-base p-2'>{shortText}...</p>
                </div>
            </Link>

        </div>

    )
}

export default BlogCard