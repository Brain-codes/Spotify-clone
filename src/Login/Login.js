import React from 'react'
import './Login.css'
import {loginUrl} from '../spotify'

function Login() {
    return (
        <div className="login">
            <img src={require('../images/image1.jpeg')} alt=""/>
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
        </div>
    )
}

export default Login
