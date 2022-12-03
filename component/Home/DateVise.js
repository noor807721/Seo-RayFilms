import React from "react";
import SliderHed from "./SliderHed";

function DateVise() {
  return (
    <>
      <div className="DateVise">
        <SliderHed type="success" hedding="Release year" />
        <div className="list row">
          {(() => {
            let items = [];
            for (let i = 2008; i < 2023; i++) {
              items.push(
                <div className="items col-4" key={i}>
                  <span>{i}</span>
                </div>
              );
            }
            return items
          })()}
        </div>
      </div>
    </>
  );
}
export default DateVise;
