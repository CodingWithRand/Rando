import React from 'react';
import { useState } from 'react';

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

const RegisterBundleButtons = () => {
  let registered = true;
  let userName = 'Example';
  if(registered){
    return(
      <div className='flex flex-row items-center'>
        <img className='w-9 h-9' src={retrieve_image("user.png")} alt='user-icon'></img>
        <label className='text-xl font-bold mx-2'>{userName}</label>
        <button className='h'>
          <img className='w-4 h-4' src={retrieve_image("arrow-triangle-button.png")}></img>
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

const NavBar = () => {
  const [ creatorName, setCreatorName ] = useState('Rand');
  const handleMouseEnter = () => {
    setCreatorName('Thanwisit Angsachon')
  };
  const handleMouseLeave = () => {
    setCreatorName('Rand')
  };
  return(
    <nav className='nav-bar'>
      <div className='flex flex-row text-2xl items-center'>
        Created by <span className='font-serif font-bold mx-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{creatorName}</span>
        <img className='w-9 h-9' src={retrieve_image('rand.png')}></img> {/* My YouTube profile*/}
      </div>
      <ul>
        <li className='text-2xl text-white'>
          <a href=''>How to use?</a>
        </li>
        <li className='text-2xl text-white'>
          <a href=''>FAQ</a>
        </li>
        <li className='text-2xl text-white'>
          <a href=''>Documentation</a>
        </li>
        <li>
          <RegisterBundleButtons />
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
      {/* <Image imgName="arrow-triangle-button.png"/> */}
      <NavBar />
    </>
  );
}

export default App;