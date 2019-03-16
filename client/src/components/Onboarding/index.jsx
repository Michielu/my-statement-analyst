import React from 'react';

import { LoginForm } from './Login';
import { RegisterForm } from './Register';
import './styles.css';

export default class Onboarding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegister: false
        }
    }

    toggleIsRegister = () => {
        this.setState((prevState) => {
            return {
                isRegister: !prevState.isRegister
            }
        })
    }

    render() {
        if (this.state.isRegister) {
            return (
                <div className="onboarding-main">
                    <RegisterForm toggleIsRegister={this.toggleIsRegister} />
                </div>
            )
        } else {
            return (
                <div className="onboarding-main">
                    <LoginForm toggleIsRegister={this.toggleIsRegister} {...this.props} />
                </div>
            )
        }

    }

}