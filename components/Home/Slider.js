import React from "react";
import Card from "./Card";
import Spinner from "../Nav/Spinner";
import SliderHed from "./SliderHed";


function Slider({hedding,data}) {
  return (
    <>
      <SliderHed slidebtn="true" hedding={hedding} page="1" limit="9" short="-1" />
      <hr />
      <div className="Main_Slider mt-3">
      {data.length===0 && <Spinner />}
        {data.response.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
      </div>
    </>
  );
}

export default Slider;