import React from "react";
import ReactDOM from "react-dom";
// import useLocalStorage from "./useLocalStorage";
import useLocalStorage from "react-use-localstorage";

import "./styles.css";

function App() {
  const [item, setItem] = useLocalStorage("name");

  return (
    <div className="App">
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={e => setItem("name", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
