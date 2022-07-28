// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Textform from "./components/Textform";
import Alertmessage from "./components/Alertmessage";
import Land from "./components/Land";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  // setInterval(() => {
  //   document.title = "Text Utils is Amazing";
  // }, 500);
  // setInterval(() => {
  //   document.title = "Install Text-Utils";
  // }, 1200);

  const [state, setstate] = useState({
    visible: false,
  });

  const togglealert = () => {
    setstate({
      visible: false,
    });
  };
  const [style, setstyle] = useState({
    backgroundColor: "black",
  });
  const changeback = (color, text) => {
    document.body.style.backgroundColor = color;
    document.body.style.color = text;
  };
  const aboutstyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <Router>
        <Nav title={"TextUtils"} changeback={changeback} style={style} />

        <Alertmessage togglealert={togglealert} state={state} />

        <Switch>
          <Route exact path="/about">
            <div className="container">
              <About style={aboutstyle} />
            </div>
          </Route>
          <Route exact path="/textform">
            <div className="conatiner">
              <Textform />
            </div>
          </Route>

          <Route exact path="/Text-manipulator">
            <Land />
          </Route>
          <Route exact path="/">
            <Land />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
