import React, { useEffect, useRef, useState } from "react";
import { database, account } from "../appwrite/appwrite";
import { ID } from "appwrite";
import Chat from "../components/Chat";
import { useRouter } from "next/router";

const Room = () => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const router = useRouter();
  const dummy = useRef();

  useEffect(() => {
    const promise1 = database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
    );

    promise1.then(
      function (response) {
        // console.log(response)
        setAllMessages(response.documents);
      },
      function (error) {
        console.log(error);
      },
    );

    const getUser = account.get();
    getUser.then(
      function (response) {
        // console.log(response)
        setUser(response);
      },
      function (error) {
        console.log(error);
      },
    );
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    const promise = database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
      ID.unique(),
      {
        message: message,
        emailId: user.email,
      },
    );

    promise.then(
      function (response) {
        // console.log(response)
      },
      function (error) {
        console.log(error);
      },
    );

    const getCollections = () => {
      const promise1 = database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
      );

      promise1.then(
        function (response) {
          // console.log(response)
          setAllMessages(response.documents);
        },
        function (error) {
          console.log(error);
        },
      );
    };

    getCollections();
    getCollections();
    dummy.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  const logOut = (e) => {
    e.preventDefault();
    account.deleteSession("current");
    router.push("/signup");
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className='room-cont'>
      <div className='sidebar'>
        <p className='title'>NextWrite💬</p>
        <button className='log' onClick={logOut}>
          LogOut
        </button>
      </div>
      <div className='room'>
        <div className='chat'>
          {allMessages.map((message) => {
            return <Chat key={message.$id} msg={message} />;
          })}
          <div className='ref' ref={dummy}></div>
        </div>
        <div className='form'>
          <input
            value={message}
            className='room-inp'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Send Message'
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
