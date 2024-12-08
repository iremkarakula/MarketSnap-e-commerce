import React from 'react'
import BlogCard from './BlogCard'
import { Button } from "@/components/ui/button.jsx"
import { Link } from "react-router-dom"
import posts from "../../posts"

function Blog() {
    return (
        <div className="flex flex-col items-center" >
            <h2 h2 className=' text-3xl text-center pt-20 font-semibold px-4' > TRENDLERE YÖN VERİN</h2>
            <div className='flex flex-wrap items-center justify-center gap-6 py-10'>
                {posts.map((e, i) => {
                    if (i < 3) {
                        return <BlogCard id={e.id} title={e.title} text={e.text} />
                    }

                })}


            </div>
            <Link to="/blogs">
                <Button variant="outline" className='cursor-pointer'>Tüm Trendleri Keşfet</Button>
            </Link>
        </div >
    )
}

export default Blog