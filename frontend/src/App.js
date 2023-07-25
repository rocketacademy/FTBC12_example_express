import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Form";
import Grid from "./Component/Grid";
import "bootstrap/dist/css/bootstrap.min.css";

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

        <Form />
        {/* <Grid /> */}
      </header>
    </div>
  );
}

export default App;
