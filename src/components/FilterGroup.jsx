
import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

import { ChevronDown } from 'lucide-react'

function FilterGroup({ item, title, cat, openSection, handleOpenSection }) {

    return (
        <div >
            <Collapsible open={openSection === title} onOpenChange={() => handleOpenSection(title)}  >
                <CollapsibleTrigger asChild className='flex justify-between items-center capitalize'>
                    <div className=''>
                        {title}
                        <ChevronDown className={`w-4 h-4 tranform-translate duration-200 ${openSection === title ? "rotate-180" : ""}`} />
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent className='py-2 space-y-1.5 max-h-48 custom-scroll'>

                    {item.map((e, i) => {
                        if (cat === "size") {
                            return <div className='flex gap-1.5 items-center capitalize text-sm '>


                                <label htmlFor={`${cat}-${i}`} className='relative w-4 h-4 flex items-center justify-center '>
                                    <input type='checkbox' id={`${cat}-${i}`} className='peer sr-only' />
                                    <div className='absolute w-4 h-4 border rounded peer-checked:bg-black transition-color duration-100'></div>

                                    <span className='absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-100'>
                                        &#x2713;
                                    </span>
                                </label>
                                <p>{e}</p>

                            </div>
                        } else if (cat === "color") {
                            return <div className='flex gap-1.5 items-center capitalize text-sm pr-2'>


                                <label htmlFor={`${cat}-${i}`} className='relative w-4 h-4 flex items-center justify-center '>
                                    <input type='checkbox' id={`${cat}-${i}`} className='peer sr-only' />
                                    <div className='absolute w-4 h-4 border rounded peer-checked:bg-black transition-color duration-100'></div>

                                    <span className='absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-100'>
                                        &#x2713;
                                    </span>
                                </label>
                                <p className='flex-grow'>{e.name}</p>
                                <span className="w-6 h-6 rounded-full border border-gray-300"
                                    style={{ backgroundColor: e.hex }} />


                            </div>
                        } else if (cat === "order") {
                            return <div className='flex gap-1.5 items-center capitalize text-sm '>


                                <label htmlFor={`${cat}-${i}`} className='relative w-4 h-4 flex items-center justify-center '>
                                    <input type='radio' id={`${cat}-${i}`} name="order" className='peer sr-only' />
                                    <div className='absolute w-4 h-4 border rounded peer-checked:bg-black transition-color duration-100'></div>

                                    <span className='absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-100'>
                                        &#x2713;
                                    </span>
                                </label>
                                <p>{e}</p>

                            </div>
                        }

                    })}
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

export default FilterGroup