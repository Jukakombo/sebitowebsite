import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ContactCard from "./ContactCard";

const ContactFunction = () => {
  const { realtimeMessages } = useCollection(
    db.collection("messages").orderBy("timestamp", "desc")
  );

  return (
    <div>
      <h1>This is a Contact-function✔✔✔hello</h1>
      {realtimeMessages?.docs.map((message) => (
        <h1 key={message.id} id={message.id}>
          Alison Juka {message.data().name}
        </h1>
      ))}
    </div>
  );
};

export default ContactFunction;
