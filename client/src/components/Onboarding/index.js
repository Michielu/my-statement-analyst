import React from 'react';

import {LoginForm} from './Login';
import './styles.css'; 

export default class Onboarding extends  React.Component {

    render() {
        console.log("Onboarding: ", this.props)
        return (
        <div className="onboarding-main">
            <LoginForm {...this.props}/>
        </div>
         )
    }

}