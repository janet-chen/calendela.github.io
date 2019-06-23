import React from 'react';
import './style.css'
import NextButton from '../components/Button';
import Mascot from '../images/bundle.js'

const WelcomeText =
    <div className='welcomeText'>
        <h2>Welcome to Calendela!</h2>
        <br />
        <br />
        <p>Using your Google Calendar data, we’ll give you a bird’s eye view of how your time is spent.<br />
            <br />
            <br />
            We’ll even help you achieve your health and fitness goals with weekly planning.
        </p>
        <br />
        <br />
    </div>

const Start = () => (
    <div className='rowColumn'>
        <div>
            {WelcomeText}
            <NextButton
                text='Start'
            />
        </div>
        <Mascot />
    </div>
);

export default Start;