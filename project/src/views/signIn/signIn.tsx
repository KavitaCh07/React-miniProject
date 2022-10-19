import './SignIn.css';
/*import logo from '../assets/images/logo.png';*/
/*import eye_on from '../assets/images/eye_on.png'*/
import Logo from '../../component/logo/logo';
import Form from '../../component/form/form';


function SignIn() {
   return <div className='container'>
    <div className='rectangle'>
    <Logo/>
    <Form/>
    </div>
    </div>
}
export default SignIn;