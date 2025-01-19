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
    if (category) list.push(category);
    if (subcategory) list.push(subcategory);
    if (foundItem) list.push(foundItem.title);




    return (
        <div>
            <Breadcrumb className="capitalize pl-2 sm:pl-4">
                <BreadcrumbList className="text-xs sm:text-sm">
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {list.slice(0, list.length - 1).map((e, i) => {
                        let path = "/" + list.slice(0, i + 1).join("/");
                        return < >
                            <BreadcrumbItem>
                                <BreadcrumbLink href={path}>{e}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>
                    })}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{list[list.length - 1]}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumb