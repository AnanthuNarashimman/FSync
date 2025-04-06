import { useState } from "react";
import '../styles/pagestyles/Find.css';

import Backbutton from "../Components/Backbutton";

function Findcommunity() {const [searchTerm, setSearchTerm] = useState("");

  const sampleCommunities = [
    { id: 1, name: "Web Developers", description: "A community for web dev enthusiasts." },
    { id: 2, name: "AI Enthusiasts", description: "Exploring AI and ML advancements." },
    { id: 3, name: "React Masters", description: "Everything about React.js." },
    { id: 4, name: "Python Coders", description: "For Python lovers and learners." },
  ];

  const filteredCommunities = sampleCommunities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="community-finder-container">
      <h1 className="title">Find a Community</h1>
      <input
        type="text"
        placeholder="Search for communities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="cardgrid">
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community) => (
            <div key={community.id} className="community-card">
              <h2 className="community-name">{community.name}</h2>
              <p className="community-description">{community.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No communities found.</p>
        )}
      </div>
    </div>

    <Backbutton />
    </>
  );
}

export default Findcommunity;
