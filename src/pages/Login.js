import React from 'react';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom'
import VibgyorLogo from '../assets/VibgyorLogin.png';
import '../css/login/Login.css';

class Login extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            logged: false,
            email: '',
            password: '',
            name: 'Deva',
            contact: '',
            accountId: '',
            deviceCount: ''
        }
    }

    handleChange = async ( event ) => {
        await this.setState( { [ event.target.name ]: event.target.value } );
    }
    handleSubmit = async ( event ) => {
        event.preventDefault();
        await this.setState( {
            logged: true
        } )
    }

    render() {
        let login = (
            <div className="Login">
                <Helmet>
                    <title>
                        Login | KARTHAVYA
                    </title>
                </Helmet>
                <div className="greet-text">
                    Welcome Back
                </div>
                <div className="image">
                    <img src={ VibgyorLogo } alt="Vibgyor Image"/>
                </div>
                <div className="login-form">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="title">
                            Login
                        </div>
                        <input className="email" type="email" name="email" placeholder="Email Address" required autoComplete="off"
                               onChange={ async ( event ) => await this.handleChange( event ) }/>
                        <input className="password" type="password" name="password" placeholder="Password" required autoComplete="false"
                               onChange={ async ( event ) => await this.handleChange( event ) }/>
                        <input className="login-button" type="submit" value="Login"
                               onSubmit={ async ( event ) => await this.handleSubmit( event ) }/>
                    </form>
                </div>
            </div>
        );

        let dashboard = (
            <Redirect to={ {
                pathname: "/dashboard/", state: {
                    name: this.state.name,
                    email: this.state.email,
                    contact: this.state.contact,
                    accountId: this.state.accountId,
                    deviceCount: this.state.deviceCount
                }
            } }/>
        )

        if ( !this.state.logged ) {
            return login;
        } else {
            return dashboard;
        }
    }
}

export default Login;