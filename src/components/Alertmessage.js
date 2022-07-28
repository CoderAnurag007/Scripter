import React from "react";
import { Alert } from "reactstrap";

export default function Alertmessage(props) {
  return (
    <div className="conatiner" style={{ height: "50px" }}>
      <Alert className="alert alert-success " isOpen={props.state.visible}>
        <div>
          Dark Mode <strong> On</strong>
        </div>
        <span
          onClick={props.togglealert}
          className="alertspan"
          aria-hidden="true"
        >
          &times;
        </span>
      </Alert>
    </div>
  );
}
