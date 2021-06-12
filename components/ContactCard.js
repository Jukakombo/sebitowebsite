import db from "../firebase";
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
  id,
}) {
  const deleteDoc = () => {
    db.collection("messages")
      .doc(id)
      .delete()
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error removing document: ", error);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title bg-dark">Time: {time}</h6>
              <h7 className="card-title">Name: {name}</h7> <br />
              <h7 className="card-title">Email:{email}</h7> <br />
              <h7 className="card-title">Phone: {phone}</h7> <br />
              <h7 className="card-title">Address: {address}</h7> <br />
              <h7 className="card-title">Company: {company}</h7> <br />
              <h7 className="card-title">Item Description:{item}</h7> <br />
              <h7 className="card-title">Quantity:{quantity}</h7> <br />
              <h7 className="card-title">Subject: {subject}</h7> <br />
              <p className="card-text text-success ">Message: {message}</p>{" "}
              <br />
              <button
                type="submit"
                onClick={deleteDoc}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
