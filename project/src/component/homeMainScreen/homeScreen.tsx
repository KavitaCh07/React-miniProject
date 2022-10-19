
import './homeScreen.css';
import search from '../../assets/images/search.png';
import add_btn from '../../assets/images/add_btn.png';
import Modal from '../modal/modal';
import React, {useState} from "react"; 


const HomeScreen = () => {
    const [modal, setModal] = useState(false);

    return <>
        <div>
      <div className="homePage">
        <div className="marginSpace">
          <div className="sites">Sites</div>

          <div className="searchBar">
            <div className="search">
              <input type="text" placeholder="Search" className="searchInput" />
              <img src={search} alt="search" className="searchIcon"/>
            </div>
            <div className="plus">
              <img src={add_btn} alt="add" onClick={() => {setModal(true);}}/>
              {modal && <Modal/>}
            </div>
          </div>   
        </div>



      </div>
    </div>
    </>
}

export default HomeScreen;