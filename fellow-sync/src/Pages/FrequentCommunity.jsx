import '../styles/pagestyles/frequent.css';
import Backbutton from '../Components/Backbutton';

function FrequentCommunity() {const frequentCommunities = [
    { id: 1, name: "React Wizards", description: "Mastering React.js together." },
    { id: 2, name: "AI Pioneers", description: "Exploring the future of AI and ML." },
    { id: 3, name: "Backend Gurus", description: "Deep dive into backend development." },
  ];

  return (
    <>
    <div className="frequent-communities-container">
      <h1 className="title">Frequently Visited Communities</h1>
      <hr></hr>
      <div className='frequentgrid'>
        {frequentCommunities.length > 0 ? (
          frequentCommunities.map((community) => (
            <div key={community.id} className="community-card">
              <h2 className="community-name">{community.name}</h2>
              <p className="community-description">{community.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No frequently visited communities yet.</p>
        )}
      </div>
    </div>

    <Backbutton />
    </>
  );
}

export default FrequentCommunity
