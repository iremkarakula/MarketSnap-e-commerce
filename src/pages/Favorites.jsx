import ProductComponent from '@/components/ProductComponent'
import React from 'react'
import { useSelector } from 'react-redux'

function Favorites() {
    const { favList } = useSelector(store => store.user)
    if (favList.length <= 0) {
        return <div className='w-full my-6 px-10 '>
            <h2 className="text-2xl font-medium sm:mb-6">Favori ürününüz yok</h2>
        </div>
    }

    return (
        <div className='w-full my-6 px-4 lg:px-10 '>
            <h2 className="text-2xl font-medium sm:mb-6">Favorilerim ({favList.length} Ürün)</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {favList.map((e, i) => {
                    return <ProductComponent product={e} key={i} />
                })}
            </div>
        </div>
    )
}

export default Favorites