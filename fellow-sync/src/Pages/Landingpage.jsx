import logo from '../assets/Images/FSync.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import '../styles/pagestyles/landingpage.css';
import Class from '../assets/Images/Class.svg';
import PersionalizedLearning from '../assets/Images/Persionalized learning.png';
import Connectivity from '../assets/Images/Connectivity.png';
import Barriers from '../assets/Images/Barriers.png';
import FeaturesGrid from '../Components/FeaturesGrid.jsx';
import Mailbox from '../Components/Mailbox.jsx';

import { useNavigate } from 'react-router-dom';

function Landingpage() {

    const navigate = useNavigate();

    function navslide() {
        const navitems = document.querySelector('.nav-items');
        const hamicon = document.querySelector('.downicon');
        navitems.classList.toggle('nav-active');
        hamicon.classList.toggle('ham-active');
    }
    return(
        <>
        <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
        
                    <div className="mob-nav" onClick={navslide}><p>Home</p><FontAwesomeIcon className='downicon' icon={faAngleDown} /></div>
        
        
                    <ul className="nav-items">
                        <li><a href="#home">Welcome</a></li>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
        
                    <div className="logbtn">
                        <button onClick={() => navigate("/logpage")}>Sign Up</button>
                    </div>
        </div>


        <div className="home" id='home'>
            <div className="homeText homeItems">
            <div className="homeTextContainer">
            <h1>Fellow <span>Sync</span></h1>
            <h2>Unlock new possibilities, connect with like-minded learners, and embark on a journey of endless growth with us!</h2>
            <p>Learn. Connect. Evolve.</p>
            </div>
            </div>
            <div className="homeImage homeItems">
            <img src={Class} alt="" />
            </div>
        </div>

        <div className="mission" id='mission'>
            <h1>Mission</h1>

            <div className="mission-wrapper">
            <div className="mission-item">
                <div className="mission-img">
                    <img src={PersionalizedLearning} alt="" />
                </div>  
                <div className="mission-text">
                <h2>Personalized Learning</h2>  
                <p>Education should match individual needs, as everyone learns at their own pace and interests. <b>FellowSync</b> 
                    personalizes learning by connecting like-minded individuals for a more engaging experience.</p> 
                </div> 
            </div>  

            <div className="mission-item"> 
                    <div className="mission-img">
                        <img src={Connectivity} alt="" />
                    </div>
                <div className="mission-text">
                <h2>Bridging the Connectivity Gap</h2>  
                <p>Despite many global connection platforms, none focus solely on education. <b>FellowSync</b> fills this gap by linking 
                    like-minded learners for meaningful collaboration.</p>
                </div>  
            </div>  

            <div className="mission-item">
                <div className="mission-img">
                    <img src={Barriers} alt="" />
                </div> 
                <div className="mission-text">
                <h2>Breaking Traditional Learning Barriers</h2>  
                <p>Tired of a rigid syllabus? <b>FellowSync</b> lets you explore learning beyond tradition. Join interest-based groups, 
                    attend events, and learn on your terms—driven by curiosity, not constraints.</p>  
                </div> 
            </div>  

            </div>
        </div>

        <div className="features" id='features'>

        <FeaturesGrid />

        </div>

        <div className="contact" id='contact'>

            <h1>Feel free to give feedback or recommendations!</h1>

            <Mailbox />
        </div>

        </>
    )
}

export default Landingpage