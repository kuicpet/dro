import React from 'react';

import appleStore from '../images/Download-on-app-store.svg';
import googlePlay from '../images/Download-on-google-play.svg';
import mobileApp from '../images/Doctors-X-–-7_iphonexspacegrey_portrait-1.png';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero_contents">
                <h1>The Complete <br/>Healthcare Solution</h1>
                <p>The DRO Health platform makes it possible for anyone <br/>
                    with a smart device to access quality, affordable <br/> healthcare.</p>
                <div>
                    <img src={appleStore} alt="" />
                    <img src={googlePlay} alt="" />
                </div>
            </div>
            <div className="hero_img">
                <img src={mobileApp} alt="" />
            </div>
        </div>
    )
}
