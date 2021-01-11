import { useEffect, useRef, useState } from "react";

// import socketIOClient from "socket.io-client";
import io from 'socket.io-client';

// const socket = io();

// const NEW_CHAT_MESSAGE_EVENT = ""; // Name of the event
// const SOCKET_SERVER_URL = "https://i2talk.live";
// const io = require("socket.io-client");
const socket = io("https://i2talk.live"
, {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  }
);


const username = "Rashotech2";
const userId = 21;
const roomName = "Faith";
const roomId = 3;

socket.emit ('joinRoom', {username, userId, roomName, roomId});

socket.on('message', message => {
  console.log(message);
})

// const msg = "username";

// setTimeout(() => {
//   socket.emit ('chatMessage', msg)
// }, 10000);




const useChatroom = (chatname) => {

  
  const [messages, setMessages] = useState([]); // Sent and received messages
  
  const socketRef = useRef();

  // useEffect(() => {
    
  //   // Creates a WebSocket connection
  //   socketRef.current = socketIOClient(socket, {
  //     query: { chatname },
  //   });
    
  //   // Listens for incoming messages
  //   socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
  //     const incomingMessage = {
  //       ...message,
  //       ownedByCurrentUser: message.senderId === socketRef.current.id,
  //     };
  //     setMessages((messages) => [...messages, incomingMessage]);
  //   });
    
  //   // Destroys the socket reference
  //   // when the connection is closed
  //   return () => {
  //     socketRef.current.disconnect();
  //   };
  // }, [chatname]);

  // // Sends a message to the server that
  // // forwards it to all users in the same room
  // const sendMessage = (messageBody) => {
  //   socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
  //     body: messageBody,
  //     senderId: socketRef.current.id,
  //   });
  // };

  // return { messages, sendMessage };
};

export default useChatroom;