import posts from '../../posts';
import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams();
    const e = posts.find(p => p.id === parseInt(id))
    return (
        <div className='flex gap-12 justify-center py-12'>
            <img src='../../src/assets/banner_1.jpeg' className='w-72 object-cover rounded' />
            <div className='w-1/3 p-4'>
                <h3 className='text-xl font-semibold'>{e.title}</h3>
                <p className='py-4'>{e.text}</p>

            </div>

        </div>


    )
}

export default Post