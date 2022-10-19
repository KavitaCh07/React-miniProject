import React from 'react';
import './sideMenu.css';
import burger_menu from '../../assets/images/burger_menu.png';
import home_icn from '../../assets/images/home_icn.png';


const SideMenu = () => {
    return (
        <>
            <div>
                <div className="sideBarContainer">
                    <div className="logoBurger">
                        <img src={burger_menu} alt="icon" />
                    </div>
                    <div className="homeIcn">
                        <img src={home_icn} alt="icon" />
                    </div>
                    <div className="round"></div>
                </div>
            </div>
        </>
    )
}

export default SideMenu;