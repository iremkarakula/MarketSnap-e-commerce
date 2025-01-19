import posts from '../../posts';
import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams();
    const e = posts.find(p => p.id === parseInt(id))
    if (!e) {
        return <h2 className="text-2xl font-medium m-6 ">Post bulunamadı!</h2>
    }

    return (
        <div className='flex flex-col md:flex-row gap-8 items-start p-4 md:p-12'>
            <img src={`../${e.img}`} className='w-full  md:w-1/2 object-cover rounded aspect-[1]' />
            <div className='w-full  space-y-2 '>
                <h3 className='text-xl font-semibold'>{e.title}</h3>
                <p>{e.text}</p>

            </div>

        </div>


    )
}

export default Post