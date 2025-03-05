import Hacking from '../assets/Images/Hacking.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/componentstyles/communitycard.css';

const managecommunities = [
    {
        title: "White Hatters",
        description: "Learn and gain expertise in 'Ethical hacking'. Learn to protect your data and devices in every possible way by joining us!",
        img: Hacking
    }
]

function CommunityCard() {
  return (
    <div className="myhub-section">
            <div className="myhub-grid">
                {managecommunities.map((managecommunity, index) => (
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
                ))}
            </div>
            </div>
  )
}

export default CommunityCard
