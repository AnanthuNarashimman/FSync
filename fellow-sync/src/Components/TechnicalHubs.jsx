import Coding from '../assets/Images/Coding.jpg';
import Mechanics from '../assets/Images/Mechanics.jpg';

import '../styles/componentstyles/HubCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const thhubDetails = [
    {
        title: "Web Development",
        description: "Crafting the future of the web—one line of code at a time!",
        img: Coding
    },
    {
        title: "Mechanical Mystery",
        description: "Breaking, fixing, and engineering the world around us!",
        img: Mechanics
    }
]

function TechnicalHubs() {
  return (
    <div className="technicalhub-section">
        <div className="techhub-grid">
            {thhubDetails.map((thhubdetail, index) => (
                <div className="techhubcard">
                <div className="thub-text">
                    <h2>{thhubdetail.title}</h2>
                    <p>{thhubdetail.description}</p>
                    <button>Enter <FontAwesomeIcon icon={faArrowRight} className='enterIcon' /></button>
                </div>
                <div className="thub-img">
                    <img src={thhubdetail.img} alt="" />
                </div>
            </div>
            ))}
        </div>
        </div>
  )
}

export default TechnicalHubs
