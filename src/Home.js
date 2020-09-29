import React from 'react';
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/FireTV/Hero---3000x1200_1x._CB404225190_.jpg"
                    alt="banner" />

                <div className="home__row"> 
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home__row">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home__row">
                    <Product></Product>
                </div>
            </div>
        </div>
    )
}

export default Home
