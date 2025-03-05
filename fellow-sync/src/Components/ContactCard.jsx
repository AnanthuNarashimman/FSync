import { useState } from "react";
import '../styles/componentstyles/contactcard.css';

function ContactCard() {
  const [message, setMessage] = useState("");
  const recipientEmail = "ananthun420@gmail.com";

  const sendMail = (event) => {
    event.preventDefault();

    if (message.trim() === "") {
      alert("Message cannot be empty!");
      return;
    }

    const subject = "Feedback from FellowSync";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
    
      
  };

  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form id="reviewForm" className="reviewform">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="review">Your Review</label>
          <textarea 
            id="review" 
            name="review" 
            rows="4" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          ></textarea>

          <button type="submit" onClick={sendMail}>Send Review</button>
        </form>

        <hr />

        <h3>Raise a Complaint</h3>
        <p>If you face any issues, you can send us a complaint.</p>

        <a href={`mailto:${recipientEmail}?subject=Complaint Regarding Community App`} className="complaint-btn">
          Raise Complaint
        </a>
      </div>
    </>
  );
}

export default ContactCard;
