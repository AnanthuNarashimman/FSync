import { useState } from "react";
import "../styles/pagestyles/CreateCommunity.css";
import Backbutton from "../Components/Backbutton.jsx";

const CreateCommunity = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "technical",
    topic: "",
    description: "",
  });

  const [loading, setLoading] = useState(false); // State to show loading
  const [message, setMessage] = useState(""); // State to show response message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/create_community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Community created successfully! 🎉");
        setFormData({ name: "", type: "technical", topic: "", description: "" }); // Reset form
      } else {
        setMessage("Error: " + result.error);
      }
    } catch (error) {
      setMessage("Something went wrong! ❌");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="create-community-page">
        <div className="create-community-container">
          <h2 className="create-heading">Create a Community</h2>

          {message && <p className="response-message">{message}</p>} {/* Display response message */}

          <form onSubmit={handleSubmit} className="community-form">
            <label className="form-label">Community Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter community name"
              required
            />

            <label className="form-label">Community Type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="type"
                  value="technical"
                  checked={formData.type === "technical"}
                  onChange={handleChange}
                />
                Technical
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="type"
                  value="non-technical"
                  checked={formData.type === "non-technical"}
                  onChange={handleChange}
                />
                Non-Technical
              </label>
            </div>

            <label className="form-label">Topic Covered</label>
            <input
              className="form-input"
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter the topic"
              required
            />

            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your community..."
              required
            ></textarea>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Creating..." : "Create Community"}
            </button>
          </form>
        </div>
      </div>
      <Backbutton />
    </>
  );
};

export default CreateCommunity;
