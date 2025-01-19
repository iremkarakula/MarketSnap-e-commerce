import Filter from '@/components/Filter'
import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import CategoryPage from './CategoryPage'

function ProductListingPage() {
    return (
        <div className='py-4 flex'>
            <div className='hidden lg:block'>
                <Filter />
            </div>

            <CategoryPage />
        </div>
    )
}

export default ProductListingPage