//import React for creating component and {Component} for creating class component
import React, { Component } from "react";
//App.css is imported for styling the component
import "../App.css";
//Link is used for linking to another page
import { Link } from "react-router-dom";

//Landing Page
class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Quiz Game!</h1>
        <br />
        {/*this link will redirect you to the instructions page */}
        <Link to="/instruction">
          <button className="btn btn-primary btn-lg">Read Instructions</button>
        </Link>
      </div>
    );
  }
}

//exporting the component so we can import it in another file
export default Home;
