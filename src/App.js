import React from "react";
//for routing
import { BrowserRouter as Router, Route } from "react-router-dom";
//for routing to home page we are importing Home.js file
import Home from "./component/Home";
//for routing to instructions page
import Instructions from "./component/Instructions";
//for routing to questions page
import Questions from "./component/Questions";
//for routing to result page
import Result from "./component/Result";

//creating functional component beacause there is no need of states
//we are exporting this compent this component here itself
export default function App() {
  return (
    //router is useful for definf routing
    <Router>
      <div className="img">
        {/* if path is exactly / then it will load Home.js page data
          if path is /instruction then it will load Instruction.js page data
          if path is /questions then it will load Questions.js page data
          if path is /result then it will load Result.js page data 
      */}
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/instruction" component={Instructions} />
          <Route path="/questions" component={Questions} />
          <Route path="/result" component={Result} />
        </div>
      </div>
    </Router>
  );
}
