import funcs from './functions'
import displayTheme from './theme.json'
import { useEffect, useState } from 'react';


const RegisterBundleButtons = () => {
  let registered = true;
  let userName = 'Example';
  const [dropdownState, setDropdownState] = useState({
    dropdownVisibility: {
      main: {
        display: 'none',
        event: 'close'
      },
      components: {
        'sub-choices': 'none'
      },
      animationClass: {
        btn: 'neutral',
        main: 'hid-den'
      }
    }
  });
  const dropdownFuncs = {
    visibilityFunc: {
      main: async () => {
        setDropdownState(prevState => ({
          ...prevState,
          dropdownVisibility: {
            ...prevState.dropdownVisibility,
            main: {
              ...prevState.dropdownVisibility.main.display,
              display: prevState.dropdownVisibility.main.display = (() => { 
                if(prevState.dropdownVisibility.main.event === "close")
                {
                  prevState.dropdownVisibility.main.event = "open";
                  return 'inline-block';
                }
                else if(prevState.dropdownVisibility.main.event === "open")
                {
                  prevState.dropdownVisibility.main.event = "close";
                  return 'none';
                }
              })(),
            },
            animationClass: {
              ...prevState.dropdownVisibility.animationClass,
              btn: prevState.dropdownVisibility.animationClass.btn === 'neutral' ? 'rotated' : 'neutral',
              main: prevState.dropdownVisibility.animationClass.main === 'hid-den' ? 'show' : 'hid-den'
            }
          },
        }));
      },
      choices: (additionState) => {
        if(dropdownState.dropdownVisibility.components.hasOwnProperty(additionState)){
          setDropdownState(prevState => ({
            ...prevState,
            dropdownVisibility: {
              ...prevState.dropdownVisibility,
              components: {
                ...prevState.dropdownVisibility.components,
                [additionState]: prevState.dropdownVisibility.components[additionState] === 'none' ? 'block' : 'none'
              }
            }
          }));
        };
      }
    }
  };
  const choices_func = () => dropdownFuncs.visibilityFunc.choices('sub-choices');
  const [ theme, setTheme ] = useState('light');
  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
  });
  const change_theme = (t) => {
    if(displayTheme['display-theme'] != t){
      setTheme(t); 
      displayTheme['display-theme'] = t;
    }
  }
  if(registered){
    return(
      <div className='user-info'>
        <img src={funcs.retrieve_image("user.png")} alt='user-icon'></img>
        <label>{userName}</label>
        <button onClick={dropdownFuncs.visibilityFunc.main}>
          <img className={dropdownState.dropdownVisibility.animationClass.btn} src={funcs.retrieve_image("arrow-triangle-button.png")} alt='Dropdown'></img>
        </button>
        <div className={`drop-down ${dropdownState.dropdownVisibility.animationClass.main}`} style={{display: dropdownState.dropdownVisibility.main}}>
          <div className='dd choice' id='1' onMouseEnter={choices_func} onMouseLeave={choices_func}><img src={funcs.retrieve_image("mode.png")}></img>Theme</div>
          <div className='sub-choices-container' onMouseEnter={choices_func} onMouseLeave={choices_func}>
            <div className='dd sub-choice' id='1-1' onClick={() => change_theme('light')} style={{display: dropdownState.dropdownVisibility.components['sub-choices']}}>Light</div>
            <div className='dd sub-choice' id='1-2' onClick={() => change_theme('dark')} style={{display: dropdownState.dropdownVisibility.components['sub-choices']}}>Dark</div>
            <div className='dd sub-choice' id='1-3' onClick={() => window.location.replace('')} style={{display: dropdownState.dropdownVisibility.components['sub-choices']}}>Custom...</div>
          </div>
          <div className='dd choice' id='2'><img src={funcs.retrieve_image("gear.png")}></img>Settings</div>
        </div>
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
  const handleMouseEnter = () => setCreatorName('Thanwisit Angsachon');
  const handleMouseLeave = () => setCreatorName('Rand');
  return(
    <nav className='nav-bar'>
      <div className='creator-pallet'>
        Created by<span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{creatorName}</span>
        <img src={funcs.retrieve_image('rand.png', true)} alt="My iconic branding on the internet"></img> {/* My YouTube profile*/}
      </div>
      <div className='real-nav'>
        <ul>
          <li className='nav-text'>
            <a href=''>How to use?</a>
          </li>
          <li className='nav-text'>
            <a href=''>FAQ</a>
          </li>
          <li className='nav-text'>
            <a href=''>Documentation</a>
          </li>
        </ul>
        <RegisterBundleButtons />
      </div>
    </nav>
  );
}

export default NavBar;