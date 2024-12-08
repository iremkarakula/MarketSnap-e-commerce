import React from 'react'

function MainPageProduct() {
    const isDiscount = true;
    const gender = 'kadın'.toUpperCase();
    const product_name = "slkjlsk".toUpperCase();
    const category = "ceket".toUpperCase();
    const price = 50.00;
    const discountedPrice = 40.00;
    return (
        <div className='w-full m-auto'>
            <img src="./src/assets/banner_1.jpeg" className='w-3/4 m-auto sm:w-full  h-80 object-cover' />
            <div className='p-4 '>
                <h3 className='text-center'>{`${gender} ${product_name} ${category}`}</h3>
                <div className='justify-center p-2 flex gap-4 pb-10'>
                    <span className={isDiscount ? 'opacity-50 line-through' : ''}>{`${price}.00 TL`}</span>
                    {isDiscount && <span className='text-red-500'>{`${discountedPrice}.00 TL`}</span>}
                </div>
            </div>


        </div >
    )
}

export default MainPageProduct