import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <ul>
          <li>Hi</li>
          <li>My</li>
          <li>Name</li>
          <li>Justin</li>
          <li></li>
        </ul>
        <div id="box"></div>
        <button id="button-Yes"> Yes </button>
        <button id="button-No"> No </button>

      </header>
    </div>
  );
}

export default App;
