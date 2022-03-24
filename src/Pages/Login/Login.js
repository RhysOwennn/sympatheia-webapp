import React from 'react';
import { ReactComponent as Logo } from '../../assets/smallsvg.svg'
import './login.css';

import video from './video13.mp4'

class Login extends React.Component {
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
    }
    render() {
        return (
            <div>
                <video className='video-style' autoPlay >
                    <source src={video} type="video/mp4" />
                </video>
            <div className='div-login'>
                <h1 className='sympatheia-heading'>Sympatheia</h1>
                <div className='div-login-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default Login;