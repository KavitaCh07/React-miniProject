import React from "react";
import './header.css';
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/images/sync.png';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return(
        <>
        <div className="headerBar">
        <div className="dashBoardLogo">
          <img src={pass_logo} alt="" />
        </div>
        <div className="headIcon">
          <div className="cloud">
            <img src={sync} alt="" />
          </div>
          <div className="profile">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
        </>
    )
}

export default Header;