import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
   window.addEventListener('scroll',transitionNavBar);
   return() =>  window.removeEventListener('scroll',transitionNavBar);
   
  },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
