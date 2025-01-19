import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

import { ChevronDown } from 'lucide-react'
import * as Slider from '@radix-ui/react-slider'



function FilterGroupPrice({ title, cat, openSection, handleOpenSection }) {
    const [priceRange, setPriceRange] = useState([500, 2000])

    return (

        <div >
            <Collapsible open={openSection === title} onOpenChange={() => handleOpenSection(title)}  >
                <CollapsibleTrigger asChild className='flex justify-between items-center'>
                    <div className=''>
                        {title}
                        <ChevronDown className={`w-4 h-4 tranform-translate duration-200 ${openSection === title ? "rotate-180" : ""}`} />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className='py-2'>
                    <Slider.Root
                        className="relative flex items-center w-full h-5"
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={4100}
                        min={700}
                        step={1}
                    >
                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-black rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-5 h-5 bg-white border-2 border-black rounded-full hover:bg-gray-100 outline-none
                            focus:ring-2 focus:ring-gray-700"
                        />
                        <Slider.Thumb
                            className="block w-5 h-5 bg-white border-2 border-black rounded-full hover:bg-gray-100 outline-none
                            focus:ring-2 focus:ring-gray-700"
                        />
                    </Slider.Root>
                    <div className='text-xs flex justify-center py-3'>
                        <span>{priceRange[0]} TL - {priceRange[1]} TL</span>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>

    )
}

export default FilterGroupPrice