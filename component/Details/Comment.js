import React from "react";
import { monthNames } from "../../asset/var/categories";

const Comment = () => {
  return (
    <div className="Comment my-2">
      <div className="d-flex">
        <img
          className="rounded-circle"
          alt="profile"
          width={50}
          height={50}
          src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
        />
        <div className="d-flex">
          <span className="py-3 px-2">Comming Soon</span>
        </div>
      </div>
      <textarea
        className="mt-2"
        placeholder="Leave a comment here"
        rows={6}
        maxLength="200"
        required
        disabled
      ></textarea>
      <div className="d-flex justify-content-end mt-2 mr-2">
        <button className="btn btn-sm btn-primary text-uppercase" disabled>
          comment
        </button>
      </div>
      <Card />
    </div>
  );
};

export default Comment;

const Card = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const date = `${dd}-${monthNames[mm]}-${yyyy}`;
  return (
    <div className="User_Reply">
      <div className="d-flex">
        <img
          className="rounded-circle"
          alt="profile"
          width={35}
          height={35}
          src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
        />
        <div className="details">
          <div className="d-flex justify-content-between">
            <p className="user-name">
              Anonymous &#8226; <span className="font-size">{date}</span>
            </p>
            <div className="btn-group dropleft">
              <i className="fa fa-ellipsis-h"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              
              ></i>
              <div className="dropdown-menu px-3 py-2">
                <li className="p-2">Report abuse</li>
                <li className="p-2">User Report</li>
              </div>
            </div>
          </div>
          <p className="font-size">
            Thanks for suporting our website !
            some issue facing in music, watch online movie, downloads links broken
            we are working on it wait for some time
          </p>
        </div>
      </div>
    </div>
  );
};
