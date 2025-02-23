import logo from '../assets/Images/Fsync.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import '../styles/pagestyles/landingpage.css';
import Class from '../assets/Images/Class.svg';
import PersionalizedLearning from '../assets/Images/Persionalized learning.png';
import Connectivity from '../assets/Images/Connectivity.png';
import Barriers from '../assets/Images/Barriers.png';
import FeaturesGrid from '../Components/FeaturesGrid.jsx';
import Mailbox from '../Components/Mailbox.jsx';

function Landingpage() {
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
                        <li><a href="">Welcome</a></li>
                        <li><a href="">Mission</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
        
                    <div className="logbtn">
                        <button>Sign Up</button>
                    </div>
        </div>


        <div className="home">
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

        <div className="mission">
            <h1>Mission</h1>

            <div className="mission-wrapper">
            <div className="mission-item">
                <div className="mission-img">
                    <img src={PersionalizedLearning} alt="" />
                </div>  
                <div className="mission-text">
                <h2>Personalized Learning</h2>  
                <p>Education should be tailored to individual needs. Everyone has a unique pace and interests, whether in technical or
                    non-technical fields. <b>FellowSync</b> helps create a personalized learning suite by connecting you with like-minded
                    individuals, making learning more engaging and effective.</p> 
                </div> 
            </div>  

            <div className="mission-item"> 
                    <div className="mission-img">
                        <img src={Connectivity} alt="" />
                    </div>
                <div className="mission-text">
                <h2>Bridging the Connectivity Gap</h2>  
                <p>Despite having multiple platforms to connect with people globally, there's no dedicated space focused solely on
                    education. <b>FellowSync</b> fills this gap by helping you connect with like-minded learners worldwide, fostering
                    meaningful educational collaborations.</p>
                </div>  
            </div>  

            <div className="mission-item">
                <div className="mission-img">
                    <img src={Barriers} alt="" />
                </div> 
                <div className="mission-text">
                <h2>Breaking Traditional Learning Barriers</h2>  
                <p>Tired of sticking to a rigid syllabus? With <b>FellowSync</b>, you can go beyond traditional learning. Join groups that
                    share your interests, participate in meetups, events, and live sessions, and explore learning on your own terms.
                    Education should be about curiosity, not constraints.</p>  
                </div> 
            </div>  

            </div>
        </div>

        <div className="features">

        <FeaturesGrid />

        </div>

        <div className="contact">

            <h1>Feel free to give feedback or recommendations!</h1>

            <Mailbox />
        </div>

        </>
    )
}

export default Landingpage