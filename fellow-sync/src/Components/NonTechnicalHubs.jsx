import Painting from '../assets/Images/Painting.jpg';
import Acting from '../assets/Images/Acting.jpg';

import '../styles/componentstyles/HubCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const thhubDetails = [
    {
        title: "Web Development",
        description: "Crafting the future of the web—one line of code at a time!",
        img: Painting
    },
    {
        title: "Mechanical Mystery",
        description: "Breaking, fixing, and engineering the world around us!",
        img: Acting
    }
]

function NonTechnicalHubs() {
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

export default NonTechnicalHubs
