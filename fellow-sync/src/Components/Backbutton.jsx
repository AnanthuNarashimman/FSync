import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import '../styles/componentstyles/backbutton.css';

function Backbutton() {

    const navigate = useNavigate();

  return (
    <button className="backbutton" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} className="bbtn"/>
    </button>
  )
}

export default Backbutton
