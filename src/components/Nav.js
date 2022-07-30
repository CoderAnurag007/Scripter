import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { style } = props;
  const param = style.backgroundColor;
  console.log(param);
  let back;
  if (param === "black") {
    back = "dark";
  } else {
    back = "light";
  }
  if (props)
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${back} bg-${param} px-3`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Scripter">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Scripter/about">
                  About
                </Link>
              </li>
              <Link className="nav-link" to="/Scripter/textform">
                Textform
              </Link>
            </ul>
            <div className="btn_wrap">
              <div
                className="orange_btn"
                onClick={() => {
                  props.changeback("orange", "black");
                }}
              ></div>
              <div
                className="green_btn"
                onClick={() => {
                  props.changeback("#40e0d0", "black");
                }}
              ></div>
              <div
                className="purple_btn"
                onClick={() => {
                  props.changeback("#d580ff", "black");
                }}
              ></div>
              <div
                className="white_btn"
                onClick={() => {
                  props.changeback("whitesmoke", "black");
                }}
              ></div>
              <div
                className="black_btn"
                onClick={() => {
                  props.changeback("black", "white");
                }}
              ></div>
            </div>

            {/* <div className="form-check form-switch">
            {" "}
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.changemode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {`${props.mode === "light" ? "dark" : "light"} Mode`}
            </label>
          </div> */}
          </div>
        </div>
      </nav>
    );
}

export default Nav;
