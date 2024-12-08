import { Link } from 'react-router-dom'
import React from 'react'

function WomanMenu() {
    return (
        <div className='flex p-12 justify-center items-start gap-12 text-nowrap'>
            <div className='flex flex-col gap-1'>
                <h4 className='font-semibold py-2'>ÜST GİYİM</h4>
                <Link>TİŞÖRT</Link>
                <Link>SWEATSHİRT</Link>
                <Link>KAZAK</Link>
                <Link>ELBİSE</Link>
            </div>
            <div className='flex flex-col gap-1'>
                <h4 className='font-semibold py-2'>ALT GİYİM</h4>
                <Link>PANTOLON</Link>
                <Link>ETEK</Link>
                <Link>ŞORT</Link>
            </div>
            <div >
                <div className='flex flex-col gap-1'>
                    <h4 className='font-semibold py-2 '>DIŞ GİYİM</h4>
                    <Link>CEKET</Link>
                    <Link>MONT</Link>
                </div>
                <div>
                    <Link>
                        <h4 className='font-semibold py-4'>TÜM ÜRÜNLER</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WomanMenu