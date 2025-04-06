import NavBar from "../Components/NavBar.jsx";
import TechnicalHubs from "../Components/TechnicalHubs.jsx";
import NonTechnicalHubs from "../Components/NonTechnicalHubs.jsx";
import ChatbotButton from "../Components/ChatbotButton.jsx";


import Learning from '../assets/Images/Learning.jpg';
import Dancing from '../assets/Images/Dancing.jpg';

import '../styles/pagestyles/mycommunity.css';

function MyCommunityPage() {
  return (
    <>

    <NavBar />

    <h1 className="mycommunitytitle">My Communities</h1>

    <div className="technicalHub Hub">

    <div className="technicalTitle HubTitle">
      <h2>Technical Communities</h2>
      <img src={Learning} alt="" />
    </div>

    <TechnicalHubs />
    
    </div>

    <div className="nontechnicalHub Hub">

    <div className="technicalTitle HubTitle">
      <h2>Non-technical Communities</h2>
      <img src={Dancing} alt="" />
    </div>

    <NonTechnicalHubs />
    
    </div>

    <ChatbotButton />

    </>
  )
}

export default MyCommunityPage
