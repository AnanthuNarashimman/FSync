import Logpage from "./Pages/Logpage.jsx";
import Landingpage from "./Pages/Landingpage.jsx";
import Homepage from "./Pages/Homepage.jsx";
import MyCommunityPage from "./Pages/MyCommunityPage.jsx";
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
            </Routes>
        </Router>
        </>
    )
}

export default App