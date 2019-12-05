import React from 'react';
import { Button, Link } from '@material-ui/core';

export default () => {
    return (
    <React.Fragment>
    <Link href="/">
        <button className="navBarHomeButton"></button>
      </Link>
      <Link href="/signup">
        <button className="navBarSignUpButton"></button>
      </Link>
      <Link href="/signin">
        <button className="navBarSignInButton"></button>
      </Link>
        <img className="navBar" src="../Images/NavBar_NoLogin.png"></img>
    </React.Fragment>
    );
}