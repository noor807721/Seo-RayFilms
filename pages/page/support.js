import React from "react";

const Contact = () => {
  return (
    <form autoComplete="off">
      <div className="ContForm container">
        <div className="hedding">
          <h2>Contact Us</h2>
        </div>
        <div className="devInformation">
        <div className="alert alert-warning" role="alert">
            Comming Soon
        </div>
        </div>
        <div className="">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="gmail"> Your Email Address</label>
            <input type="text" className="form-control" id="gmail" required/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Your Message</label>
            <textarea className="form-control" id="description" required></textarea>
          </div>
        </div>
        <div className="FormSub">
          <button className="btn btn-info col-6">Send</button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
