import './css/use/app.css';
import NavBar from './comps/nav';
import funcs from './comps/functions'

const DefaultPage = (
  <div className="App">
    <header className="App-header">
      <img src={funcs.retrieve_image("logo.svg")} className="App-logo" alt="logo" />
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

function App() {
  return (
    <>
      {
      /* Images credit by - Flaticon
      <a href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Pixel perfect - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Pixel perfect - Flaticon</a> 
      <a href="https://www.flaticon.com/free-icons/mode" title="mode icons">Mode icons created by zafdesign - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/gear" title="gear icons">Gear icons created by Freepik - Flaticon</a>
      */
      }
      <NavBar />
    </>
  );
}

export default App;