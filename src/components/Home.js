import React from 'react'
import {Link} from "react-router-dom"
import './home.css'
import github from "../images/github.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import discord from "../images/discord.png"
import LoginButton from './Login'
import AppleLoginButton from './AppleLogin'
import LogoutButton from './Logout'
import Profile from './Profile'

const Home = () => {
  return (
    <div className='container'>

        <div className='left'>
            <p className='LOGO'>LOGO</p>
            <p className='BOARD'>Board.</p>
            <div id='icons'>
                <img className="icons" src={github} />
                <img className="icons twitter" src={twitter} />
                <img className="icons linkedin" src={linkedin} />
                {/* <img className="icons discord" src={discord} /> */}
            </div>
        </div>


        <div className='right'>


            <div className='form'>
                <p className='signIn'>Sign In</p>
                <p >Sign in to your account</p>

                <LoginButton />
                <AppleLoginButton/>
                
                <form>
                    <label>Email address</label>
                    <input type='email' />
                    <label>Password</label>
                    <input type='password' />
                    <p className='blueOnes'>Forgot password?</p>
                    <button type='submit'>Sign In</button>

                <p id="lastp"><span>Don't have an account?</span><span  className='blueOnes'>Register here</span>  </p>
                        
                </form>
{/* <LogoutButton/> */}
<Profile/>
                 </div>
        </div>


    </div>
  )
}

export default Home