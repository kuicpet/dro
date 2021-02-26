import React from 'react';
import logo from '../images/logo-768x138.png';

export default function Hero() {
    return (
        <div>
            <img src={logo} alt="DRO Health" />
            <h4>The Complete Healthcare Solution</h4>
            <p>The DRO Health platform makes it possible for anyone <br/>
                with a smart device to access quality, affordable healthcare.</p>
        </div>
    )
}
