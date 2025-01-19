import React from 'react'

function SnapCardProfile() {
    return (
        <div className="p-4">
            <h2 className="text-xl mb-8">Snap Kartım</h2>
            <div className='w-72 h-44 rounded-md m-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
            hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 transition-all duration-200 ease-in-out'>
                <h4 className='text-2xl text-white font-bold text-center p-4 tracking-normal'>Snap Puanım</h4>
                <p className='text-4xl text-white font-bold text-center p-4 tracking-normal'>248.50 TL </p>
            </div>
        </div>
    )
}

export default SnapCardProfile