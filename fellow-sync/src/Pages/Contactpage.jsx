import ContactCard from "../Components/ContactCard.jsx"
import NavBar from "../Components/NavBar.jsx"

import '../styles/pagestyles/contactpage.css';

function Contactpage() {
  return (

    <>
    <NavBar />
    <div className="body">
    <ContactCard />
    </div>
    </>

  )
}

export default Contactpage
