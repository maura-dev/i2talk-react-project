import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

//const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
//const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const NEW_SCHEDULE_MESSAGE_EVENT = "NEW_SCHEDULE_MESSAGE_EVENT";
//const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
//const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";
const SOCKET_SERVER_URL = "https://i2talk.live";

const useChat = (chatID, isender, receiver) => {
  
  const [messages, setMessages] = useState([]);
  //const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [user, setUser] = useState();
  const socketRef = useRef();

  useEffect(() => {

    const fetchUser = async () => {
    	var bearerToken= localStorage.getItem("bearerToken")

    	var config = {
	      method: 'get',
	      url: `${SOCKET_SERVER_URL}/api/users/username/${receiver}`,
	      headers: {
	        'Authorization': `Bearer ${bearerToken}` 
	      }
	    };

	    await axios(config)
	    .then(  (response)=> {
	       const result = response.data


	        setUser({
		      	isender: isender,
		      	receiver: receiver,
		      	chatID:chatID,
		        receiverName: result.fullName,
		        receiverPicture: result.picture,
		        receiverId: result.id,
		        receiverBio: result.bio
		      });
	    })
	    .catch(function (error) {
	      alert(error);
	    });
    };
    fetchUser();
  }, [chatID, isender, receiver]);



  useEffect(() => {
    const fetchMessages = async () => {

    	var bearerToken= localStorage.getItem("bearerToken")

    	var config = {
	      method: 'get',
	      url: `${SOCKET_SERVER_URL}/api/chats/messages/${chatID}`,
	      headers: {
	        'Authorization': `Bearer ${bearerToken}` 
	      }
	    };

	    await axios(config)
	    .then(  (response)=> {
	      const result = response.data.data;
	      setMessages(result);
	    })
	    .catch(function (error) {
	      alert(error);
	    });
	    
    };


    fetchMessages();
  }, [chatID]);
         

  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = socketIOClient("https://i2talk.live/chats", {
      	query: { 
      		isender: "Pishikeni",
      		receiver: "Rashotech2",
      		chatID: "Pishikeni_Rashotech2"
      	 },
		withCredentials: true,
	    extraHeaders: {
			"my-custom-header": "abcd"
		}
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
      socketRef.current.emit("NEW_CHAT_EVENT", {
      isender: user.isender,
      chatID: user.chatID,
      receiver: user.receiver,
    });

    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.userID === user.isender,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

   /* socketRef.current.on(START_TYPING_MESSAGE_EVENT, (typingInfo) => {
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
    });*/

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, chatID, isender, receiver]);

  const sendMessage = (messageBody) => {
    if (!socketRef.current) return;
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      message: messageBody,
      chatID: chatID,
      user: user,
    });
  };

  const scheduleMessage = (messageBody) => {
    if (!socketRef.current) return;
    socketRef.current.emit(NEW_SCHEDULE_MESSAGE_EVENT, {
      message: messageBody,
      chatID: chatID,
      user: user,
      dateTime:"16-01-2021 09:10:00"


    });
  };

  /*const startTypingMessage = () => {
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
  };*/

  return {
    messages,
    user,
    // users,
    // typingUsers,
    sendMessage,
    scheduleMessage,
    /*startTypingMessage,
    stopTypingMessage,*/
  };
};

export default useChat;
