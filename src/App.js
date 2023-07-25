// import logo from './images/logo.svg';
// import user_icon from './images/user.png'
// import arrow_btn from "./images/arrow-triangle-button.png"
// import context from 'require-context.macro'
import './App.css';
import React from 'react';

function retrieve_image(name) {
  return process.env.PUBLIC_URL + `/imgs/backend-images/${name}`;
};

const DefaultPage = (
  <div className="App">
    <header className="App-header">
      <img src={retrieve_image("logo.svg")} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

function RegisterBundleButtons() {
  let registered = true;
  let userName = 'Example';
  if(registered){
    return(
      <div className='user-info'>
        <img src={retrieve_image("user.png")} alt='user-icon'></img>
        <label>{userName}</label>
        <button>
          <img src={retrieve_image("arrow-triangle-button.png")}></img>
        </button>
      </div>
    );
  }else{
    return(
      <div className='btn-bundle'>
        <button className='nav-btn log-in' onClick={() => window.location.replace('')}>Log in</button>
        <button className='nav-btn sign-up' onClick={() => window.location.replace('')}>Sign Up</button>
      </div>
    );
  };
}

const NavBar = (
  <nav className='nav-bar'>
    <ul>
      <li className='nav-text'>
        <a href=''>FAQ</a>
      </li>
      <li className='nav-text'>
        <a href=''>Documentation</a>
      </li>
      <li>
        {RegisterBundleButtons()}
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <>
      {/* <Image imgName="arrow-triangle-button.png"/> */}
      {NavBar}
    </>
  );
}

export default App;