import React from "react";
import Textform from "./Textform";
import daypic from "../day.webp";
import nightpic from "../night.jpg";

export default function Land() {
  return (
    <>
      <h1 className="divhead my-3 landhead">Welcome to Text-Utils</h1>
      <div className="container">
        <div className="row ">
          <div className=" col-8 landpara ">
            <div className="container">
              <h3 id="landtag">
                Text Utils Makes Your Text Editing a Piece of Cake 🎂
              </h3>
              <p>
                Text-Utilis is an utility Web-app that allows to Modify , Edit
                and Transform Text into well structured manner
              </p>
            </div>
          </div>
          <div className="col-4">
            <img src={nightpic} alt="" id="landimg1" />
          </div>
        </div>
      </div>
      <Textform />
    </>
  );
}
