
import React, { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import Filter from './Filter'
import { ChevronDown } from 'lucide-react'

function ResponsiveFilter() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div >
            <Collapsible className='pl-2 sm:pl-4 py-2 ' open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild >
                    <div className='flex items-center border gap-2 pl-4 py-1.5 rounded-md hover:bg-accent  w-48'>
                        Sıralama & Filtre
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className=' bg-white rounded-md  py-4 mr-2 '>
                    <Filter />
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default ResponsiveFilter