import React from "react";
import { useState } from "react";
import "./textform.css";

export default function Textform(props) {
  const [text, setText] = useState("");
  const clicked = (e) => {
    setText(text.toUpperCase());
    e.preventDefault();
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
    e.preventDefault();
  };
  const clickedlow = (e) => {
    setText(text.toLocaleLowerCase());
    e.preventDefault();
  };
  const cleartext = (e) => {
    setText("");
    e.preventDefault();
  };
  const gettext = (e) => {
    const newtext = document.querySelector("#mybox");
    newtext.className = "newtext";
    e.preventDefault();
  };
  const gettext2 = (e) => {
    const newtext2 = document.querySelector("#mybox");
    newtext2.className = "newtext2";
    e.preventDefault();
  };

  const handlespace = (e) => {
    const newtxt = text.split(/[  ]+/);
    setText(newtxt.join(" "));
    e.preventDefault();
  };

  return (
    <>
      <div className="container textform">
        <form>
          <div className="form-group">
            <label htmlFor="mybox"></label>
            <h3>{props.heading}</h3>
            <textarea
              style={props.style}
              className="form-control mb-3"
              value={text}
              onChange={handleOnchange}
              id="mybox"
              rows="10"
              placeholder="Play With Your Texts Here..."
            ></textarea>
          </div>
          <div className="btngroup">
            <button className="btn btn-primary my-1 mx-1" onClick={clicked}>
              Convert Uppercase
            </button>
            <button className="btn btn-success my-1 mx-1" onClick={clickedlow}>
              Convert Lowercase
            </button>
            <button className="btn btn-danger my-1 mx-1" onClick={cleartext}>
              Clear Text
            </button>
            <button
              className="btn btn-secondary rightbtn my-1 "
              onClick={gettext}
            >
              Bold
            </button>
            <button
              className="btn btn-secondary leftbtn my-1 "
              onClick={gettext2}
            >
              Light
            </button>
            <button className="btn btn-info mx-1 my-1" onClick={handlespace}>
              Remove spaces
            </button>
          </div>
        </form>
      </div>
      <div className="container textformbox">
        <h2 className="my-2">Your Text Summary</h2>
        <p>
          <b>
            {
              text.split(/[ ]+/).filter((e) => {
                return e.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b>{text.length}</b> Characters
        </p>
        <p>
          {(0.01 * text.split([" "]).length - 0.01).toString().slice(0, 5)}
          Minutes to read
        </p>
        <p>Sallaybles {text.split(/[.?!]+/).length - 1}</p>
        <h3>Preview</h3>

        <p className="preview-box">{text}</p>
      </div>
    </>
  );
}
