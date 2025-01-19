import { Link } from 'react-router-dom'
import React from 'react'
import posts from "../../posts"

function BlogCard({ id, title, text, img }) {


    return (
        <div className='w-full md:w-72 h-80 overflow-hidden bg-cover' style={{ backgroundImage: `url(${img})` }}>
            <Link key={id} to={`/post/${id}`}>
                <div className='bg-white h-full w-full  translate-y-3/4 bg-opacity-70 hover:translate-y-0 hover:bg-opacity-90
            transition ease-in-out duration-500 cursor-pointer'>
                    <h3 className='text-xl font-semibold p-4 h-1/4'>{title}</h3>
                    <p className='text-base px-4 line-clamp-6'>{text}...</p>
                </div>
            </Link>

        </div>

    )
}

export default BlogCard