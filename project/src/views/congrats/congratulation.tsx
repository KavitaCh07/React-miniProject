import './congratulation.css'
import Logo from '../../component/logo/logo';
import Form from '../../component/form/form';

function Congratulation() {
    return <>
        <div className='container'>
            <div className='success'>
            <div className='message-box'>
                <div className='product-deleted-succ'>Congrats!!! Success, Signin to access the valut</div>
            </div>

            <div className='rectangle'>
                <Logo />
                <Form />
            </div>
        </div>
        </div>
    </>

}

export default Congratulation;