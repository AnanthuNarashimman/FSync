import GeminiLogo from '../assets/Images/Gemini.svg';

import '../styles/componentstyles/ChatbotButton.css';

import { useNavigate } from 'react-router-dom';

function ChatbotButton() {

    const navigate = useNavigate();

  return (
    <button className="chatbotButton" onClick={() => navigate('/chatbot')}>
        <img src={GeminiLogo} alt="" />
    </button>
  )
}

export default ChatbotButton
