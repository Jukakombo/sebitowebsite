import React from "react";

function ContactCard({
  email,
  message,
  phone,
  name,
  time,
  item,
  company,
  address,
  subject,
  quantity,
}) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div className="card text-left">
              <div className="card-header">Time: {time}</div>
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h5 className="card-title">Email:{email}</h5>
                <h5 className="card-title">Phone: {phone}</h5>
                <h5 className="card-title">Address: {address}</h5>
                <h5 className="card-title">Company: {company}</h5>
                <h5 className="card-title">Item Description:{item}</h5>
                <h5 className="card-title">Quantity:{quantity}</h5>
                <h5 className="card-title">Subject: {subject}</h5>
                <h5 className="card-title">Message: {message}</h5>

                <a href="/" className="btn btn-primary">
                  Home
                </a>
              </div>
              <div className="card-footer text-muted">Message: {message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
