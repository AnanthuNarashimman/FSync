import React from "react";
import "../styles/componentstyles/FeatureGrid.css";

const features = [
  {
    title: "Personalized Learning Paths",
    description: "Learn at your own pace by connecting with like-minded individuals.",
  },
  {
    title: "Education-Centric Networking",
    description: "A platform focused only on education, unlike generic social media.",
  },
  {
    title: "Find Like-Minded Fellows",
    description: "Join or create study groups based on your interests and goals.",
  },
  {
    title: "Live Sessions & Meetups",
    description: "Conduct and participate in live discussions, events, and knowledge-sharing sessions.",
  },
  {
    title: "Skill-Based Communities",
    description: "Engage in focused learning groups for technical and non-technical skills.",
  },
  {
    title: "Collaborative Learning",
    description: "Work on projects together, exchange knowledge, and grow as a team.",
  },
  {
    title: "Seamless Communication",
    description: "Chat, discuss, and share resources with your learning network.",
  },
  {
    title: "Beyond Traditional Syllabus",
    description: "Explore real-world skills beyond the conventional academic curriculum.",
  },
  {
    title: "Resource Sharing Hub",
    description: "Easily share study materials, books, notes, and valuable resources within your community.",
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
