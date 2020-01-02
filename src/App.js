import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Instructions from "./component/Instructions";


export default function App() {
  return (
<Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/instruction" component={Instructions} />

    </div>
</Router>
  );
}

