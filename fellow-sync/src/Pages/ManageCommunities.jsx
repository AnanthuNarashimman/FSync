import '../styles/pagestyles/managecommunity.css';
import NavBar from '../Components/NavBar.jsx';
import CommunityCard from '../Components/CommunityCard.jsx';

function ManageCommunities() {
  return (
    <>
        <NavBar />
        
        <h1 className="managecommunitytitle">Manage Communities</h1>

        <CommunityCard />

    </>
  )
}

export default ManageCommunities
