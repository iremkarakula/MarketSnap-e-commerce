import React from 'react'
import BlogCard from './BlogCard'
import { Button } from "@/components/ui/button.jsx"
import { Link } from "react-router-dom"
import posts from "../../posts"

function Blog() {
    return (
        <div className="flex flex-col items-center px-4" >
            <h2 h2 className=' text-3xl text-center pt-20 font-semibold px-4' > TRENDLERE YÖN VERİN</h2>
            <div className='hidden lg:flex items-center justify-center gap-6 py-10 '>
                {posts.slice(0, 3).map((e, i) => {

                    return <BlogCard id={e.id} title={e.title} text={e.text} img={e.img} />

                })}
            </div>
            <div className='flex flex-col md:flex-row lg:hidden items-center justify-center gap-6 py-10 '>
                {posts.slice(0, 2).map((e, i) => {

                    return <BlogCard id={e.id} title={e.title} text={e.text} img={e.img} />

                })}
            </div>
            <Link to="/blogs">
                <Button variant="outline" className='cursor-pointer'>Tüm Trendleri Keşfet</Button>
            </Link>
        </div >
    )
}

export default Blog