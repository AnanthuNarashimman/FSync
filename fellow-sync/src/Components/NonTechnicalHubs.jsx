import Painting from '../assets/Images/Painting.jpg';
import Acting from '../assets/Images/Acting.jpg';

import '../styles/componentstyles/HubCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const thhubDetails = [
    {
        title: "Canvas Chronicles",
        description: "Unleash your imagination, one brushstroke at a time—where colors speak louder than words!",
        img: Painting
    },
    {
        title: "Stage Crafters",
        description: "Step into the spotlight, embrace the stage—where every role is a new story waiting to be told!",
        img: Acting
    }
]

function NonTechnicalHubs() {
  return (
    <div className="technicalhub-section">
        <div className="techhub-grid">
            {thhubDetails.map((thhubdetail, index) => (
                <div className="techhubcard" key={index}>
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

export default NonTechnicalHubs
