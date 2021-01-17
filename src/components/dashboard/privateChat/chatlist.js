import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

const SOCKET_SERVER_URL = "https://i2talk.live";

const useChat = (isender) => {
  const [senderChats, setSenderChats] = useState([]);
  const [senderUser, setsenderUsers] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    var loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"));
    var currentUser = (loggedUserDetails.username).toLowerCase();
    setsenderUsers(currentUser);
  }, []);

 useEffect(() => {
   

    const fetchSenderChats = async () => {
        var loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"));
        var realSender = (loggedUserDetails.username).toLowerCase()
        var bearerToken= localStorage.getItem("bearerToken");
    	//var realSender= isender.toLowerCase()

    	var config = {
	      method: 'get',
	      url: `${SOCKET_SERVER_URL}/api/chats/${realSender}`,
	      headers: {
	        'Authorization': `Bearer ${bearerToken}` 
	      }
	    };

	    await axios(config)
	    .then(  (response)=> {
	      var chatMessages = response.data.data;
	      setSenderChats(chatMessages);
	    })
	    .catch(function (error) {
	      alert(error);
	    });
	    
    };

    fetchSenderChats();
    
  }, [isender]);
         

  useEffect(() => {
    socketRef.current = socketIOClient("https://i2talk.live/chats", {
		withCredentials: true,
	    extraHeaders: {
			"my-custom-header": "abcd"
		}
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
      socketRef.current.emit('chats', senderUser);
    });

    socketRef.current.on("chatlist", (response) => {
        setSenderChats(response);
      });

    return () => {
      socketRef.current.disconnect();
    };
  }, [senderUser]);


  return {
    senderChats,
    senderUser
  };
};

export default useChat;
