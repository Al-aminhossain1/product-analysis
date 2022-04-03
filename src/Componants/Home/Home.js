import React from 'react';
import image from './hotel.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <div className='home-container'>
                <div className='half-width heading '>
                    <h1>In beauty, peace, tranquility
                        Hotel Water Blue awaits you</h1>
                    <p> Hotel Water Blue Inn has accommodations with free WiFi, air conditioning, a garden, and a terrace. Private parking is available on site.

                        Some of the units have satellite flat-screen TV, a fully equipped kitchenette with a microwave, and a private bathroom with a shower and slippers.

                        Guests at the apartment can enjoy a continental or an à la carte breakfast.

                        At Hotel Water Blue Inn guests are welcome to use a hot tub.

                        A car rental service is available at the accommodation</p>
                </div>
                <div className='half-width'>
                    <img src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;