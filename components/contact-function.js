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
      <h1>This is a Contact-function✔✔✔</h1>
      {realtimeMessages?.docs.map((message) => (
        <div key={message.id} id={message.id}>
          <h1> {message.data().name}</h1>
          <ContactCard
            name={message.data().name}
            timestamp={message.data().timestamp}
            email={message.data().email}
            phone={message.data().phone}
            address={message.data().address}
            company={message.data().company}
            subject={message.data().subject}
            item={message.data().item}
            quantity={message.data().quantity}
            message={message.data().message}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactFunction;
