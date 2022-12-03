import React from "react";

function Spinner({msg="loading..."}) {
  return (
    <div className="spinner">
      <span className="loding"></span>
      <span className="btn__text">{msg}</span>
    </div>
  );
}

export default Spinner;
