import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Question extends Component {
  state = {
    questions: [
      {
        ques: "Inside which HTML element do we put the JavaScript?",
        ans: [
          "<js>",
          "<script>",
          "<scripting>",
          "<Javascript>"
        ],
        cans: 1
      },
      {
        ques: "Is it possible to link within the current page?",
        ans: ["Only in framesets", "Yes", "No", "null"],
        id: 1,
        cans: 2
      },
      {
        ques: "Which section is used for text and tags that are shown directly on your web page?",
        ans: ["Head", "Metatags", "Metatags", "None"],
        id: 2,
        cans: 1
      },
      {
        ques: "Why should you add alternative text to your images?",
        ans: [
          "In case the user wishes to load a different picture",
          "So the users can get an idea of what the image is before it loads",
          "So the user can save the image using the text as a name",
          "None of these"
        ],
        id: 3,
        cans: 3
      },
      {
        ques: "Where is the correct place to insert a JavaScript?",
        ans: [
              "The <body> section",
              "The <head> section",
              "Both <head> and <body>",
              "The <footer> section"
            ],
        id: 4,
        cans: 0
      },
      {
        ques: "How do you create a function in JavaScript?",
        ans: [
              "function myFunction()", 
              "function = myFunction()", 
              "function:myFunction()", 
              "None of the above"
            ],
        id: 5,
        cans: 0
      },
      {
        ques: 'What is the correct syntax for referring to an external script called "abc.js"?',
        ans: ['<script href=" abc.js">', '<script name=" abc.js">', '<script src=" abc.js">', "None of the above"],
        id: 6,
        cans: 3
      },
      {
        ques: "How to create a Date object in JavaScript?",
        ans: [
          "dateObjectName = new Date([parameters])",
          "dateObjectName.new Date([parameters])",
          "dateObjectName := new Date([parameters])",
          "dateObjectName Date([parameters])"
        ],
        id: 7,
        cans: 1
      },
      {
        ques: "Which of the following is correct about features of JavaScript?",
        ans: [
          "JavaScript is a lightweight, interpreted programming language.",
          "JavaScript is designed for creating network-centric applications.",
          "JavaScript is complementary to and integrated with Java.",
          "All of the above."
        ],
        id: 8,
        cans: 3
      },
      {
        ques: "Which built-in method returns the character at the specified index?",
        ans: ["characterAt()", "getCharAt()", "charAt()", "None of the above."],
        id: 9,
        cans: 2
      },
      {
        ques:
          "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        ans: ["toSource()", "toString()", "valueOf()", "None of the above."],
        id: 10,
        cans: 0
      },
      {
        ques: 'var city = new Array("delhi", "agra", "akot", "aligarh","palampur");console.log(city.shift());',
        ans: ["agra", "akot", "delhi", "aligarh"],
        id: 11,
        cans: 1
      },
      {
        ques: "Which of the following function of String object extracts a section of a string and returns a new string?",
        ans: ["slice()", "split()", "replace()", "search()"],
        id: 12,
        cans: 1
      },
      {
        ques: "Which of the following function of String object returns the calling string value converted to upper case?",
        ans: [" toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
        id: 13,
        cans: 2
      },
      {
        ques: "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
        ans: ["link()", "sub()", "sup()", "small()"],
        id: 14,
        cans: 3
      }
    ],
    randomNumber: 0,
    quesCount: 0,
    numberCheck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    totalTimeRem: 150,
    timeRem: 15,
    allResponseCount: 0,
    correctAnsCount: 0,
    lifeOneChecked: false,
    lifeTwoChecked: false
  };

  nextHandler = e => {
    this.uncheckHandler();
    clearInterval(this.myInterval);
    this.timeHandler();
    let arr = this.state.numberCheck;
    let x = this.state.numberCheck[Math.floor(Math.random() * this.state.numberCheck.length)];
    let index = arr.indexOf(x);
    arr.splice(index, 1);
    this.setState({
      randomNumber: x,
      quesCount: this.state.quesCount + 1,
      numberCheck: arr
    });
  };

  uncheckHandler = () => {
    if (this.state.quesCount <= 9) {
      for (let i = 0; i < 4; i++) {
        document.getElementById(i).checked = false;
        document.getElementById(i).disabled = false;
      }
    }
  };

  onUnload = event => {
    // let confirmationMessage = "Some message";
    // event.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    // return confirmationMessage;
    // // the method that will be used for both add and remove event
    console.log("hellooww");
    console.log(event);
    event.returnValue = "Helloowwdsfdsdsaf";
  };

  componentDidMount() {
    this.timeHandler();
    window.addEventListener("beforeunload", this.onUnload);
  }

  componentWillMount() {
    window.addEventListener("beforeunload", this.onUnload);
  }

  timeHandler = () => {
    if (this.state.quesCount >= 9) return;
    this.setState(
      {
        timeRem: 15
      },
      () => {
        {
          this.myInterval = setInterval(() => {
            this.setState(
              {
                timeRem: this.state.timeRem - 1
              },
              () => {
                if (this.state.timeRem == 0) {
                  this.nextHandler();
                }
              }
            );
          }, 1000);
        }
      }
    );
  };

  ansHandler = event => {
    let userAns = event.target.value;
    let correctAns = this.state.questions[this.state.randomNumber].cans;
    if (userAns == correctAns) {
      this.setState({
        correctAnsCount: this.state.correctAnsCount + 1
      });
    }
    this.setState({
      allResponseCount: this.state.allResponseCount + 1
    });
  };

  lifeHandler = (event, type) => {
    if (type === "50/50") {
      let ansIndex = this.state.questions[this.state.randomNumber].cans;
      let arr = [0, 1, 2, 3];
      let index = arr.indexOf(ansIndex);
      arr.splice(index, 1);
      for (let i = 0; i < 2; i++) {
        document.getElementById(arr[i]).disabled = true;
      }
      this.setState({
        lifeOneChecked: true
      });
    } else {
      this.setState({
        lifeTwoChecked: true,
        timeRem: this.state.timeRem + 10
      });
    }
  };
  
  resultHandler = () => {
    localStorage.setItem("attemptedQues", this.state.allResponseCount);
    localStorage.setItem("correctAns", this.state.correctAnsCount);
    localStorage.setItem("wrongAns", this.state.allResponseCount - this.state.correctAnsCount);
    localStorage.setItem("unAttemptedQues", 10 - this.state.allResponseCount);
  };

  render() {
    console.log("this.state.quesCount", this.state.quesCount);
    if (this.state.quesCount <= 9 && this.state.lifeOneChecked) {
      document.getElementById("lifeone").disabled = true;
    }
    if (this.state.quesCount <= 9 && this.state.lifeTwoChecked) {
      document.getElementById("lifetwo").disabled = true;
    }
    const { timeRem } = this.state;
    return (
      <React.Fragment>
        {this.state.quesCount <= 9 ? (
          <React.Fragment>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8 ">
                <h4 className="Time1">Time Left : {timeRem} Secs</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="Questions">
                  <p>
                    <b>
                      Ques
                      {this.state.quesCount + 1}.
                    </b>{" "}
                    {this.state.questions[this.state.randomNumber].ques}
                  </p>
                  <input type="radio" id="0" name="ans" value="0" onClick={e => this.ansHandler(e)} unchecked /> (A){" "}
                  {this.state.questions[this.state.randomNumber].ans[0]}
                  <br />
                  <input
                    type="radio"
                    id="1"
                    name="ans"
                    value="1"
                    onClick={e => this.ansHandler(e)}
                    unchecked
                  /> (B) {this.state.questions[this.state.randomNumber].ans[1]} <br />
                  <input
                    type="radio"
                    id="2"
                    name="ans"
                    value="2"
                    onClick={e => this.ansHandler(e)}
                    unchecked
                  /> (C) {this.state.questions[this.state.randomNumber].ans[2]}
                  <br />
                  <input
                    type="radio"
                    id="3"
                    name="ans"
                    value="3"
                    onClick={e => this.ansHandler(e)}
                    unchecked
                  /> (D) {this.state.questions[this.state.randomNumber].ans[3]}
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <button className="btn btn-primary ButtonTwo" onClick={e => this.nextHandler(e)}>
                  Next
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="lifeline">
                <h3 className="lifelabel">Lifelines</h3>
                <button className="btn btn-primary" id="lifeone" onClick={e => this.lifeHandler(e, "50/50")}>
                  50/50
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" id="lifetwo" onClick={e => this.lifeHandler(e, "10sec")}>
                  +10 Secs
                </button>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="row">
              <div className="col-12">
                <div className="Result">
                  <h1>Thanks For Giving Test</h1>
                  <br />
                  <Link
                    to={{
                      pathname: "/result",
                      correctAns: this.state.correctAnsCount,
                      wrongAns: this.state.allResponseCount - this.state.correctAnsCount,
                      attemptedQues: this.state.allResponseCount,
                      unAttemptedQues: 10 - this.state.allResponseCount
                    }}
                  >
                    <button className="btn btn-primary" onClick={this.resultHandler}>
                      Get Your Result
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Question;
