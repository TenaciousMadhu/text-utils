import React from "react";

function AlertShow(props) {
  return (
    <>
      <div
        style={props.alertStyle}
        className="alert alert-success"
        role="alert"
      >
        {props.alert}
      </div>
    </>
  );
}

export default AlertShow;
