import React, { PureComponent } from 'react';
import './styles/start.css'

export const WELCOME_HEADER = 'Welcome to Calendela!';
export const WELCOME_BODY = 'Using your Google Calendar data, we’ll give you a bird’s eye view of how your time is spent. We’ll even help you achieve your health and fitness goals with weekly planning.';

export default class Start extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className='center'>
                    <div className='welcomeText'>
                        <h2>{WELCOME_HEADER}</h2>
                        <p>{WELCOME_BODY}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}