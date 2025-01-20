import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { products } from './../products';



function BreadCrumb() {


    const { gender, category, subcategory, id } = useParams();
    const foundItem = products.find(e => e.id === Number(id));
    const list = [];

    if (gender) list.push(gender);

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

    if (category && categoryMap[category]) {
        list.push(categoryMap[category]);
    }

    if (subcategory && subCategoryMap[subcategory]) {
        list.push(subCategoryMap[subcategory])
    } else {
        list.push(subcategory)
    }

    if (id) {
        list.push(foundItem.title)
    }

    const breadcrumbItems = list.slice(0, list.length - 1);
    const lastItem = list[list.length - 1];

    const generatePath = (index) => {
        switch (index) {
            case 0:
                return `/${gender}`;
            case 1:
                return `/${gender}/${category}`;
            case 2:
                return `/${gender}/${category}/${subcategory}`;
            default:
                return "";
        }
    }



    return (
        <div>
            <Breadcrumb className="capitalize pl-2 sm:pl-4">
                <BreadcrumbList className="text-xs sm:text-sm">
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
                    </BreadcrumbItem>

                    {breadcrumbItems.map((e, i) => {
                        const path = generatePath(i);

                        return < >

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink href={path}>{e}</BreadcrumbLink>
                            </BreadcrumbItem>



                        </>
                    })}


                    {lastItem && (<> <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{lastItem}</BreadcrumbPage>
                        </BreadcrumbItem></>



                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumb