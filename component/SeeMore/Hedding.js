import React from "react";



function Hedding({title}) {
  return (
    <>
      <div className="seeHedding text-center">
      <hr className="line1"/>
        <h1>{title}</h1>
      <hr className="line2"/>
      </div>
    </>
  );
}

export default Hedding;
