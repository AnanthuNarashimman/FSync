import Logpage from "./Pages/Logpage.jsx";
import Landingpage from "./Pages/Landingpage.jsx";
import './styles/app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/logpage" element={<Logpage />} />
            </Routes>
        </Router>
        </>
    )
}

export default App