import { useContext } from "react";

import NavBar from "../Components/NavBar.jsx";
import Actioncard from "../Components/Actioncard.jsx";
import Footer from "../Components/Footer.jsx";
import ChatbotButton from "../Components/ChatbotButton.jsx";

import '../styles/pagestyles/homepage.css';



function Homepage() {

  return (
    <>
    <NavBar />

    <Actioncard />

    <Footer />

    <ChatbotButton />
    </>
  )
}

export default Homepage
