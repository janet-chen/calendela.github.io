import { PureComponent } from 'react';

const WELCOME_HEADER = 'Welcome to Calendela!'
const WELCOME_BODY = 'Using your Google Calendar data, we’ll give you a bird’s eye view of how your time is spent. We’ll even help you achieve your health and fitness goals with weekly planning.'

class Start extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        };
    }

}

export default Start;