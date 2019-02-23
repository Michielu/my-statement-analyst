import React from 'react';

import {LoginForm} from './Login';
import './styles.css'; 

export default class Onboarding extends  React.Component {

    render() {
        return (
        <div className="onboarding-main">
            <LoginForm/>
        </div>
         )
    }

}