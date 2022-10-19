import React from 'react'
import './form.css'
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <>
    <div className='formContainer'>
        <form action="/passManager" className='form'>
        <div className='sign-in-to-your-acco'>SIGN IN TO YOUR ACCOUNT</div>
        <input type="tel" name="" id="" required minLength={10} maxLength={10} placeholder='Mobile Number' />
        <input type="text" name="" id="" required minLength={4} placeholder='MPin' />
        <div className='forgot-your-password'><Link to="/passManager">Forgot your password?</Link> </div>
        <button className='btn' type='submit'><span className='sign-in'>SIGN IN</span></button>
        <div className='dont-have-a-account'>Don’t have a Account? <Link to="/signUp">SIGNUP</Link></div>
        </form>
    </div>
    </>
    
  )
}

export default Form;
