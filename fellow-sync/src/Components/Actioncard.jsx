import CreateCommunity from '../assets/Images/Create.jpg';
import JoinCommunity from '../assets/Images/Join.jpg';
import FavCommunity from '../assets/Images/CommunityImage.jpg';
import GlobalChat from '../assets/Images/GlobalChat.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import '../styles/componentstyles/Actioncard.css';


const actions = [
    {
        title: "Community Builder",
        description: "Start your own community and bring people together!",
        img: CreateCommunity,
        buttonText: "Create",
        navigate: "/createcommunity"
    },
    {
        title: "Explore Communities",
        description: "Explore and join the communities that matches your interests!",
        img: JoinCommunity,
        buttonText: "Explore",
        navigate: "/explorecommunity"
    },
    {
        title: "Frequent Community",
        description: "Quick access to the community you visit the most!",
        img: FavCommunity,
        buttonText: "Open",
        navigate: "/frequentcommunity"
    },
    {
        title: "Global Connect",
        description: "Chat and share posts with people globally!",
        img: GlobalChat,
        buttonText: "Connect",
        navigate: "/globalconnect"
    },
]

function Actioncard() {

  const navigate = useNavigate();

  return (
    <div className="actioncard-section">
    <div className="actioncard-grid">
        {actions.map((action, index) => (
            <div className="actioncard" key={index}>
            <div className="action-text">
                <h2>{action.title}</h2>
                <p>{action.description}</p>
                <button onClick={() => navigate(`${action.navigate}`)} >{action.buttonText}<FontAwesomeIcon icon={faArrowRight} className='rightIcon'/></button>
            </div>
            <div className="action-img">
                <img src={action.img} alt="" />
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Actioncard
