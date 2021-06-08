import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../firebase";
import ContactCard from "./ContactCard";

const ContactFunction = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  // const { realtimeMessages } = useCollection(
  //   db.collection("messages").orderBy("timestamp", "desc")
  // );

  return (
    <div>
      <h1>This is a Contact-function✔✔✔hello</h1>
      {messages.map((message) => (
        <ContactCard
          key={message.id}
          id={message.id}
          message={message.message}
          phone={message.phone}
          address={message.address}
          email={message.email}
          quantity={message.quantity}
          name={message.name}
          subject={message.subject}
          item={message.item}
          time={message.timestamp}
          company={message.company}
        />
      ))}
    </div>
  );
};

export default ContactFunction;
