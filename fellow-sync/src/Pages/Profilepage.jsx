import React from "react";
import "../styles/pagestyles/Profilepage.css";

import NavBar from "../Components/NavBar.jsx";

import { useContext } from "react";
import { UserContext } from "../Components/UserContext.jsx";


const Profilepage = () => {

  const {userName, mail} = useContext(UserContext);
  

  

  function handleLogout() {
    window.location.href = "https://f-sync-sigma.vercel.app/logout";
  }

  return (

    <>
    <NavBar />
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>
        <div className="profilerefText">
          {userName[0].toLocaleUpperCase()}
        </div>
        <div className="profile-info">
          <div className="profile-field">
            <p className="field-label">Name</p>
            <p className="field-value">{userName}</p>
          </div>
          <div className="profile-field">
            <p className="field-label">Email</p>
            <p className="field-value">{mail}</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="edit-button profile-action-button">Edit Profile</button>
          <button className="logout-button profile-action-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>

    </>
  );
};

export default Profilepage;
