import React from 'react';
import { Button, Link } from '@material-ui/core';

export default () => {
    return (
      <>
      <Link href="/">
        <div className="home_container">
          <button id="btn_home"></button>
        </div>
      </Link>
      <Link href="/pt-main">
        <div className="nav_container" id="PT_container">
          <button id="btn_PTInformation"></button>
        </div>
      </Link>
      <Link href="/usermatching-main">
        <div className="nav_container" id="matching_container">
          <button id="btn_UserMatching"></button>
        </div>
      </Link>
      <Link href="/feedback-main">
        <div className="nav_container" id="feedback_container">
          <button id="btn_Feedback"></button>
        </div>
      </Link>
      <Link href="/signup">
        <div id="signup_container">
          <button id="btn_Signup"></button>
        </div>
      </Link>
      <Link href="/signin">
        <div id="signin_container">
          <button id="btn_Signin"></button>
        </div>
      </Link>
        <img className="navBar" src="../Images/NavBar_NoLogin.png"></img>
    
        </>
    );
}