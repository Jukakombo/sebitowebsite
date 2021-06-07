import React from "react";

function ContactCard({
  name,
  email,
  subject,
  message,
  item,
  quantity,
  address,
  company,
  phone,
  timestamp,
}) {
  return (
    <div>
      <h1>Message{phone} box</h1>
    </div>
  );
}

export default ContactCard;
