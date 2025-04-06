import develop from '../assets/Images/Development.jpg';

import Backbutton from '../Components/Backbutton';
import '../styles/pagestyles/Globalconnect.css';

function GlobalConnect() {
  return (
    <>
    <img src={develop} className='develop' alt="" />
    <h3 className='developtext'>Will be available soon....</h3>
    <Backbutton />
    </>
  )
}

export default GlobalConnect
