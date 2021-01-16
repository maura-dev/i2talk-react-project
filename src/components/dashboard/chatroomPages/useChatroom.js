import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';


const USER_JOIN_CHAT_EVENT= "USER_JOIN_CHAT_EVENT";
const SOCKET_SERVER_URL = "https://i2talk.live";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";

const useChatroom = (roomName, roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [user, setUser] = useState();
  const socketRef = useRef();

  // get user details from local storage
  const userDetails = JSON.parse(localStorage.getItem("loggedUserDetails"));
  const accessToken = localStorage.getItem("bearerToken");
  const userId = userDetails.id;
  const username = userDetails.username;


  useEffect(() => {
    const fetchMessages = async () => {
      await axios.get (
        `${SOCKET_SERVER_URL}/api/chatrooms/messages/${roomId}`, { 
          headers: { 
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )
      .then((response) => {
        const result = response.data.data;
        console.log(result);
        setMessages(result);
      })
      .catch((error) => {
        console.error(error)
      })
      
    };

    fetchMessages();
    
  }, [roomId]);

  useEffect (()=> {
    const fetchUser = ()=> {
      setUser({
        username: userDetails.username,
        userId: userDetails.id
      });
    }
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { username: userDetails.username, userId: userDetails.id, roomId, roomName },
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
    });

    socketRef.current.on(USER_JOIN_CHAT_EVENT, (userDetails) => {
      if (user.userID === socketRef.current.id) return;
      setUsers((users) => [...users, user]);
    });

    socketRef.current.on(USER_LEAVE_CHAT_EVENT, (user) => {
      setUsers((users) => users.filter((u) => u.id !== user.id));
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    socketRef.current.on(START_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => [...users, user]);
      }
    });

    socketRef.current.on(STOP_TYPING_MESSAGE_EVENT, (typingInfo) => {
      if (typingInfo.senderId !== socketRef.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => users.filter((u) => u.name !== user.name));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };

  }, [roomId, roomName, user]);
  
  const sendMessage = (messageBody) => {
    if (!socketRef.current) return;
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      message: messageBody,
      senderId: socketRef.current.id,
      userID: userId,
      username: username
    });

  }

  const startTypingMessage = () => {
    if (!socketRef.current) return;
    socketRef.current.emit(START_TYPING_MESSAGE_EVENT, {
      senderId: socketRef.current.id,
      user,
    });
  };

  const stopTypingMessage = () => {
    if (!socketRef.current) return;
    socketRef.current.emit(STOP_TYPING_MESSAGE_EVENT, {
      senderId: socketRef.current.id,
      user,
    });
  };

  return {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  }

}

export default useChatroom;