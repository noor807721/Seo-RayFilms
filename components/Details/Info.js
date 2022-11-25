import React, {useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Info(props) {
  const { imdbId } = useParams();
  const { likes, dislike } = props.data;
  const [l,setl] = useState("disable");
  const [dl,setdl] = useState("disable");
  let a = imdbId + "like";

  const reqlike = async () => {
    if (localStorage.getItem(a) === a) {
      localStorage.removeItem(a)
      setl("disable")
    }else{
      localStorage.setItem(a,a)
      setl("active")
    }
  };
  useEffect(() => {
    if(localStorage.getItem(a) === a){
      setl("active")
    }
    
  }, [l,dl]);

  return (
    <div className="settings">
      <span className={`py-2 ${l}`}>
        <i className="fas fa-thumbs-up d-block" onClick={reqlike}></i> {likes}
      </span>
      <span className="py-2">
        <i className="fas fa-share d-block"></i> Share
      </span>
      <span className="py-2">
        <i className="fas fa-download d-block"></i> Download
      </span>
      <span className="py-2">
        <i className="fas fa-flag d-block"></i> Report
      </span>
    </div>
  );
}
export default Info;
