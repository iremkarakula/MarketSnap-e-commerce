import BreadCrumb from '@/components/BreadCrumb';
import Filter from '@/components/Filter';
import FilterGroup from '@/components/FilterGroup';
import ProductComponent from '@/components/ProductComponent';
import ResponsiveFilter from '@/components/ResponsiveFilter';
import { products } from '@/products';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function CategoryPage() {

    const { gender, category, subcategory } = useParams();



    const categoryMap = {
        "ust-giyim": "üst giyim",
        "alt-giyim": "alt giyim",
        "dıs-giyim": "dış giyim"
    };


    const subCategoryMap = {
        "tisort": "tişört",
        "sort": "şort",
        "gomlek": "gömlek"
    }
    let categoryTitle = category && categoryMap[category] ? categoryMap[category] : "";
    let subCategoryTitle = subcategory && subCategoryMap[subcategory] ? subcategory = subCategoryMap[subcategory]
        : subcategory;

    let pageTitle = gender;
    if (subcategory) {
        pageTitle += " " + subCategoryTitle;
    } else if (categoryTitle) {
        pageTitle += " " + categoryTitle
    }



    return (
        <div >


            <div>
                {
                    products.length > 0 ? <div>
                        <h2 className=' text-2xl font-medium capitalize pl-2 sm:pl-4'>{pageTitle}</h2>
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



