import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>This is Raghu's first react project. Welcome Raghu!</h2>
		  <h4>The react code has been pushed to Github repository successfully..!</h4>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raghu, understand the basics of react.
        </a>
      </header>
    </div>
  );
}

export default App;
