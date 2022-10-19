import './passManager.css';
import SideMenu from '../../component/sideMenu/sideMenu';
import Header from '../../component/header/header';
import HomeScreen from '../../component/homeMainScreen/homeScreen';


function PassManager() {
    return <div>
        <div className='home'>

        <SideMenu/>
        <Header/>
        <HomeScreen/>

        </div>
    </div>
    

}

export default PassManager;