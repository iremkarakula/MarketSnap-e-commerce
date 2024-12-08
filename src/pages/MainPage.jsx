import React from 'react'
import Banner from '../components/Banner'
import NewArrivals from '../components/NewArrivals'
import Banner2 from '../components/Banner2'
import BestSellers from '../components/BestSellers'
import CardAd from '../components/CardAd'
import Blog from '../components/Blog'
import Insta from '../components/Insta'
import WhyChooseUs from '../components/WhyChooseUs'


function MainPage() {
    return (
        <div className='w-full'>
            <Banner />
            <NewArrivals />
            <Banner2 />
            <BestSellers />
            <CardAd />
            <Blog />
            <Insta />
            <WhyChooseUs />

        </div>
    )
}

export default MainPage