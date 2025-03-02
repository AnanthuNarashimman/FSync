import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import '../styles/componentstyles/Footer.css';

function Footer() {

    function showAttribution(e) {
        const footer = document.querySelector('.footer');
        footer.classList.toggle('active');
    
        if (footer.classList.contains('active')) {
            footer.style.height = footer.scrollHeight + 'px';
            
            setTimeout(() => {
                footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 200); 
        } else {
            footer.style.height = '200px';
        }
    
        e.target.classList.toggle('active');
    }
    

  return (
    <div className="footer">
        <h1>Attributions</h1>

        <p>Icons and Images used in the Website are taken from <a href="https://www.freepik.com/">Freepik</a> and <a href="https://www.flaticon.com/">Flaticon.</a></p>

        <FontAwesomeIcon icon={faChevronDown} className="downarrow" onClick={(e) => showAttribution(e)}/>

        <ul className="attributionlist">
            <li><a href="https://www.flaticon.com/free-icons/google" title="google icons">Google icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/online-learning" title="online learning icons">Online learning icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/network" title="network icons">Network icons created by prettycons - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/obstacle" title="obstacle icons">Obstacle icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/path" title="path icons">Path icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/networking" title="networking icons">Networking icons created by ranksol graphics - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/friends" title="friends icons">Friends icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/live-news" title="live news icons">Live news icons created by Tanah Basah - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/community" title="community icons">Community icons created by KP Arts - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/collaboration" title="collaboration icons">Collaboration icons created by small.smiles - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/conversation" title="conversation icons">Conversation icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/innovation" title="innovation icons">Innovation icons created by Kiranshastry - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/share" title="share icons">Share icons created by edt.im - Flaticon</a></li>
        </ul>
    </div>
  )
}

export default Footer
