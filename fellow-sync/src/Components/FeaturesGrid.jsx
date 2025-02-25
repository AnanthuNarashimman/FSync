import React from "react";
import "../styles/componentstyles/FeatureGrid.css";
import Path from '../assets/Images/finish.svg';
import Network from '../assets/Images/networking.svg';
import Fellows from '../assets/Images/high-five.svg';
import Live from '../assets/Images/live.svg';
import Community from '../assets/Images/group-users.svg';
import Learning from '../assets/Images/collaboration.svg';
import Communication from '../assets/Images/communication.svg';
import Beyond from '../assets/Images/innovation.svg';
import Share from '../assets/Images/share.svg';


const features = [
  {
    title: "Personalized Learning Paths",
    description: "Learn at your own pace by connecting with like-minded individuals.",
    img: Path
  },
  {
    title: "Education-Centric Networking",
    description: "A platform focused only on education, unlike generic social media.",
    img: Network
  },
  {
    title: "Find Like-Minded Fellows",
    description: "Join or create study groups based on your interests and goals.",
    img: Fellows
  },
  {
    title: "Live Sessions & Meetups",
    description: "Conduct and participate in live discussions, events, and knowledge-sharing sessions.",
    img: Live
  },
  {
    title: "Skill-Based Communities",
    description: "Engage in focused learning groups for technical and non-technical skills.",
    img: Community
  },
  {
    title: "Collaborative Learning",
    description: "Work on projects together, exchange knowledge, and grow as a team.",
    img: Learning
  },
  {
    title: "Seamless Communication",
    description: "Chat, discuss, and share resources with your learning network.",
    img: Communication
  },
  {
    title: "Beyond Traditional Syllabus",
    description: "Explore real-world skills beyond the conventional academic curriculum.",
    img: Beyond
  },
  {
    title: "Resource Sharing Hub",
    description: "Easily share study materials, books, notes, and valuable resources within your community.",
    img: Share
  }
];

const FeaturesGrid = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.img} alt="" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
