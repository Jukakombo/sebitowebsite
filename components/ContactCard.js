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
    <div>
      <h1>Time: </h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>phone: {phone}</h1>
      <h1>Address: {address}</h1>
      <h1>Company: {company}</h1>
      <h1>Item Description:{item}</h1>
      <h1>Quantity:{quantity}</h1>
      <h1>Subject: {subject}</h1>
      <h1>Message: {message}</h1>
    </div>
  );
}

export default ContactCard;
