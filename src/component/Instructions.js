import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";


class App extends Component {
  state = {
      // Quiz instructions 
    ins: [
      "Threre will be total ten questions in the test.",
      "Questions will be repeating after one by one.",
      "Each question contains total 4 options",
      "Out of those 4 options only one will be correct",
      "You will have 15 seconds to answer each question.",
      "The remaining time would be visible to you at the top-right",
      "When the time is up for a question, that question will be considered as unanswered",
      "You can move to next question by clicking on next button",
      "You can not go to back to previous question",
      "You will have two lifelines one is called 50/50 and another is called +10secs",
      "50/50 removes two incorrect answers for current question",
      "+10secs gives ten extra seconds for current question"
    ]
  };
  render() {
    return (
      <div className="App2">
        <h1>Instructions!</h1>
        <br />
        {this.state.ins.map((data, i) => (
          <p
            style={{
              textAlign: "left",
              marginLeft: "36%",
              marginRight: "28%"
            }}
            key={i}
          >
            {i + 1}. {data}
          </p>
        ))}
        <Link to="/questions">
          <button className="btn btn-primary btn-lg">Let's Start the quiz</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
