import './signUp.css';
import Logo from '../../component/logo/logo';
import {Link} from "react-router-dom";

function SignUp() {
   return <div className='container'>
    <div className='rectangle'>
    <Logo/>
    <div className='formContainer'>
        <form action="/" className='form'>
            <div className='sign-up'>SIGN UP</div>
            <input type="tel" name="" id="" required minLength={10} placeholder='Enter Mobile Number'/>
            <input type="text" name="" id="" required minLength={4} placeholder='Enter 4 Digit MPin'/>
            <input type="text" name="" id="" required minLength={4} placeholder='Re-Enter 4 Digit MPin'/>
            <button className='button-background' type='submit'> <span className='signup'>SIGN UP </span></button>
        </form>
    </div>
   </div>
   </div>
}
export default SignUp;