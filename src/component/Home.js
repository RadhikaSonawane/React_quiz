import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcomes to Quiz Game!</h1>
        <br />

        <Link to="/instruction">
          <button className="btn btn-primary btn-lg">Read Instructions</button>
        </Link>
      </div>
    );
  }
}

export default Home;
