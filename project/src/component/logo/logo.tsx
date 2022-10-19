import React from 'react'
import logo from '../../assets/images/logo.png';
import './logo.css'

const Logo = () => {
  return (
    <>
        <div className='logoContainer'>
    <div className='logo'>
        <img src={logo} alt="" />
        <div className='protect-manage-eve'>
            Protect & Manage every 
            password in your business
        </div>
    </div>
    </div>
    <div className='verticalRectangle'></div>
    </>
    
  )
}

export default Logo