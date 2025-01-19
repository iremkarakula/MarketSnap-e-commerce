import React, { useEffect, useState } from 'react'
import FilterGroup from './FilterGroup'
import categories from '../../category'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import FilterGroupPrice from './FilterGroupPrice'

function Filter() {


    const sizeList = ["s", "m", "l"];
    const colorList = [
        { id: 'green', name: 'Yeşil', hex: '#00A86B' },
        { id: 'black', name: 'Siyah', hex: '#000000' },
        { id: 'white', name: 'Beyaz', hex: '#FFFFFF' },
        { id: 'red', name: 'Kırmızı', hex: '#FF0000' },
        { id: 'blue', name: 'Mavi', hex: '#0000FF' },
        { id: 'yellow', name: 'Sarı', hex: '#FFFF00' },
        { id: 'purple', name: 'Mor', hex: '#800080' },
        { id: 'orange', name: 'Turuncu', hex: '#FFA500' },
        { id: 'pink', name: 'Pembe', hex: '#FFC0CB' },
        { id: 'brown', name: 'Kahverengi', hex: '#A52A2A' },
        { id: 'gray', name: 'Gri', hex: '#808080' },
        { id: 'beige', name: 'Bej', hex: '#F5F5DC' },
        { id: 'navy', name: 'Lacivert', hex: '#000080' },
        { id: 'teal', name: 'Turkuaz', hex: '#008080' },
        { id: 'olive', name: 'Zeytin Yeşili', hex: '#808000' },
    ]
    const orderList = ["fiyata göre azalan", "fiyata göre artan", "yeniler önce"]
    const history = useHistory();
    const [openSection, setOpenSection] = useState(false);

    const handleOpenSection = (data) => {
        setOpenSection(openSection === data ? null : data)
    }



    return (
        <div>
            <div className='w-60 px-8 space-y-4 '>
                <FilterGroup item={orderList} title="sıralama seçiniz" cat="order" openSection={openSection}
                    handleOpenSection={handleOpenSection} />
                <FilterGroup item={sizeList} title="Beden" cat="size" openSection={openSection}
                    handleOpenSection={handleOpenSection} />
                <FilterGroup item={colorList} title="Renk" cat="color" openSection={openSection} handleOpenSection={handleOpenSection} />
                <FilterGroupPrice title="Fiyat" cat="price" openSection={openSection} handleOpenSection={handleOpenSection} />

            </div>

        </div >
    )
}

export default Filter