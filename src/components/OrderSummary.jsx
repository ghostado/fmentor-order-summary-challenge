import React from 'react'

import './OrderSummary.css'

import illustrationHero from '../assets/illustration-hero.svg'
import iconMusic from '../assets/icon-music.svg'

const OrderSummary = () => {
    return (
        <div className='container'>
            {/* illustration */}
            <img
                className='illustration'
                src={illustrationHero}
            />

            {/* info container */}
            <div className='infoContainer'>
                {/* title */}
                <h1 className='title'>Order Summary</h1>

                {/* description */}
                <p className='description'>
                    You can now listen to millions of songs,
                    audiobooks, and podcasts on any device
                    anywhere you like!
                </p>

                {/* plan container */}
                <div className='planContainer'>
                    <div className="planInfo">
                        {/* icon */}
                        <img
                            className='music'
                            src={iconMusic}
                        />

                        <div className='planTextInfo'>
                            {/* plan title */}
                            <h4 className='planTitle'>
                                Annual Plan
                            </h4>

                            {/* plan princing */}
                            <p className='planPricing'>
                                $59.99/year
                            </p>
                        </div>
                    </div>

                    {/* change */}
                    <p className='change'>
                        <a>Change</a>
                    </p>
                </div>

                {/* button */}
                <button className='button'>
                    Proceed to Payment
                </button>

                {/* cancel */}
                <p className='cancel'>
                    Cancel Order
                </p>
            </div>
        </div>
    )
}

export default OrderSummary