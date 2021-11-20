// import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home";
import Form from "./components/Form/form";

function App() {
  return (
    <React.Fragment>
          {/* <Route path="/" exact component={Page}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/create_new" component={Form} />
          

      </React.Fragment>
  );
}

export default App;
