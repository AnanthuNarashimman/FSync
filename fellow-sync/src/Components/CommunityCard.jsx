import Hacking from '../assets/Images/Hacking.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/componentstyles/communitycard.css';

import { useState, useEffect } from 'react';

function CommunityCard() {

    const [communityDictionary, setCommunityDictionary] = useState(null);
    
      const getCommunityData = async () => {
        try {
          const response = await fetch("http://localhost:5000/testgetdata", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
    
          if (response.ok) {
            const data = await response.json();
            setCommunityDictionary(data|| {});
          } else {
            console.error("Error fetching data:", await response.text());
          }
        } catch (error) {
          console.error("Error is:", error);
        }
      };
    
      useEffect(() => {
        getCommunityData();
      }, []); 
      
  return (
    <div className="myhub-section">
            <div className="myhub-grid">

                {communityDictionary? (
                    Object.values(communityDictionary).map((communityDictionary, index) => (
                        <div key={index} className="myhubcard">
                        <div className="myhub-text">
                        <h2>{communityDictionary.name}</h2>
                        <p>{communityDictionary.description}</p>
                        <button>Open <FontAwesomeIcon icon={faArrowRight} className='enterIcon' /></button>
                        </div>
                        <div className="myhub-logo">
                            <h1>{communityDictionary.name[0]}</h1>
                        </div>
                        </div>
                    )
                )) :(
                    <p>Loading...</p>
                )}

                {/* {managecommunities.map((managecommunity, index) => (
                    <div key={index} className="myhubcard">
                    <div className="myhub-text">
                        <h2>{managecommunity.title}</h2>
                        <p>{managecommunity.description}</p>
                        <button>Open <FontAwesomeIcon icon={faArrowRight} className='enterIcon' /></button>
                    </div>
                    <div className="myhub-img">
                        <img src={managecommunity.img} alt="" />
                    </div>
                </div>
                ))} */}
            </div>
            </div>
  )
}

export default CommunityCard
