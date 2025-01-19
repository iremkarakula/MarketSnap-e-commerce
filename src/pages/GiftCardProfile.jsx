import React from 'react'

function GiftCardProfile() {
    const giftcards = [{ id: 1, value: 150 }, { id: 2, value: 200 }]

    return (
        <div className="p-4">
            <h2 className="text-xl mb-8">Hediye Kartlarım</h2>
            <div>
                {giftcards.map((e, i) => {
                    return <div key={i}
                        className='flex items-center justify-center text-white text-xl font-semibold w-36 h-20 rounded-md bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 
                        hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 my-4 transition-all duration-200 ease-in-out'>
                        {e.value} TL
                    </div>

                })}
            </div>

        </div>
    )
}

export default GiftCardProfile