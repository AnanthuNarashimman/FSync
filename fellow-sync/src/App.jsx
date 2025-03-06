import Logpage from "./Pages/Logpage.jsx";
import Landingpage from "./Pages/Landingpage.jsx";
import Homepage from "./Pages/Homepage.jsx";
import MyCommunityPage from "./Pages/MyCommunityPage.jsx";
import ManageCommunities from "./Pages/ManageCommunities.jsx";
import Contactpage from "./Pages/Contactpage.jsx";
import Profilepage from "./Pages/Profilepage.jsx";
import Chatbot from "./Pages/ChatBot.jsx";
import './styles/app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/logpage" element={<Logpage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/mycommunities" element={<MyCommunityPage />} />
                <Route path="/managecommunities" element={<ManageCommunities />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path="/profile" element={<Profilepage />} />
                <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
        </Router>
        </>
    )
}

export default App