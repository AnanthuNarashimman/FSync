import { useState, useEffect } from 'react';

import '../styles/componentstyles/navbar.css';


import logo from '../assets/Images/Fsync.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

  const [showSearch, setShowSearch] = useState(true);
  let lastScrollY = window.scrollY; // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowSearch(false);
      } else {
        setShowSearch(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function hamactive() {
    document.querySelector('.navigation-items').classList.toggle('active');
    document.querySelector('.hamburger :nth-child(1)').classList.toggle('span-1-active');
    document.querySelector('.hamburger :nth-child(2)').classList.toggle('span-2-active');
    document.querySelector('.hamburger :nth-child(3)').classList.toggle('span-3-active');
  }


  return (
    <div className="navigation-bar">

        <div className="navlogo">
            <img src={logo} alt="" />
        </div> 

        <div className={`searcharea ${showSearch ? "visible" : "hidden"}`}>
            <input type="text" placeholder='Search for Courses...' />
            <FontAwesomeIcon icon={faSearch} className="search"/>
        </div>               
                
        <ul className="navigation-items">
            <li><a href="/home">Home</a></li>
            <li><a href="/mycommunities">My Communities</a></li>
            <li><a href="/managecommunities">Manage Communities</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={hamactive}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <FontAwesomeIcon icon={faMessage} className="message" />

        <FontAwesomeIcon icon={faUser} className="profile"/>
        
    </div>
  )
}

export default NavBar