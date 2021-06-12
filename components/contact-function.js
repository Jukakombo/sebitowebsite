import React, { useEffect, useState } from "react";

import db from "../firebase";
import ContactCard from "./ContactCard";
import firebase from "firebase";

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
      <h1 className="text-center">Contact-Dashboard</h1>

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
          time={new Date(message.timestamp?.seconds * 1000).toUTCString()}
          company={message.company}
        />
      ))}
    </div>
  );
};

export default ContactFunction;
