import React from "react";

const DwdLink = ({ data }) => {
  const { d_480p, d_720p } = data;
  return (
    <>
      <div className="DwdLink" id="dwd-link">
        <h4>Download Link</h4>
        <ul className="download_btn">
          <a href={d_480p} target="_blank" rel="noopener noreferrer">
            <li>Download Now 480p</li>
          </a>
          <a href={d_720p} target="_blank" rel="noopener noreferrer">
            <li>Download Now 720p</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default DwdLink;
