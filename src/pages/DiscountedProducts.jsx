import React from 'react'
import { products } from '@/products'
import ProductComponent from '@/components/ProductComponent'


function DiscountedProducts() {
    return (
        <div className='p-4'>
            <h2 className=' text-2xl font-medium '>İNDİRİMLİ ÜRÜNLER</h2>
            <div className='flex flex-wrap'>
                {products.map((product, i) => {

                    if (product.isDiscount) {
                        return <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 mt-4">
                            <ProductComponent product={product} />
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default DiscountedProducts