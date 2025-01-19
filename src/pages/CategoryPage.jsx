import BreadCrumb from '@/components/BreadCrumb';
import Filter from '@/components/Filter';
import FilterGroup from '@/components/FilterGroup';
import ProductComponent from '@/components/ProductComponent';
import ResponsiveFilter from '@/components/ResponsiveFilter';
import { products } from '@/products';
import React, { useEffect, useState } from 'react'


function CategoryPage() {




    return (
        <div >


            <div>
                {
                    products.length > 0 ? <div>
                        <h2 className=' text-2xl font-medium capitalize pl-2 sm:pl-4'>jksgsnslkfd</h2>
                        <div className='mt-2'>
                            <BreadCrumb />
                            <div className='lg:hidden'>
                                <ResponsiveFilter />
                            </div>



                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                            {products.map(product => {
                                return <ProductComponent product={product} />
                            })}

                        </div>
                    </div> : <div>
                        <h2 className=' text-2xl font-medium capitalize '>Ürün bulunamadı </h2>
                    </div>

                }
            </div>






        </div>
    )
}

export default CategoryPage



