// import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home"
// import Page from "./components/Page/page"

function App() {
  return (
    <React.Fragment>
          {/* <Route path="/" exact component={Page}/> */}
          <Route path="/" component={Home} />
      </React.Fragment>
  );
}

export default App;
