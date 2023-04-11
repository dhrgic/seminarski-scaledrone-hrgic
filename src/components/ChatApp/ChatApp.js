import React, { useEffect, useState } from "react";
import {
  ChatAppWrapper,
  MessagesContainer,
  MessagingWrapper,
  MessagesWrapper,
  UsersWrapper,
  UsersList,
} from "../../lib/style/generalStyles";
import User from "./User/User";
import Message from "./Message/Message";
import Input from "./Input/Input";
import { randomName, randomColor, clientID } from "../../utils/data";

const ChatApp = () => {
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(false);
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    /*on mount the app creates a new instance od scaledrone*/
    if (member.username !== "") {
      const drone = new window.Scaledrone(clientID, {
        data: member,
      });
      setDrone(drone);
    }
  }, [member]);

  useEffect(() => {
    const droneEvents = () => {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        member.username = randomName();
        member.color = randomColor();
        setMember(member);
        roomEvents();
      });

      drone.on("error", (error) => console.error(error));
      drone.on("disconnect", () => {
        console.log("Disconnected, Scaledrone reconnect");
      });
      drone.on("reconnect", () => {
        console.log("Reconnected");
      });
    };

    const roomEvents = () => {
      const room = drone.subscribe(`observable-room`);
      room.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Entered the room");
          setRoom(true);
        }
      });

      room.on("message", (message) => {
        receiveMsg(message);
      });
    };
    // RECEIVING MESSAGES FROM SCALEDRONE
    const receiveMsg = (message) => {
      setMessages((messages) => [...messages, message]);
    };

    if (drone && !member.username) {
      droneEvents();
    }
  }, [drone, member, room, messages]);

  const handleSubmit = (message) => {
    drone.publish({
      room: "observable-room",
      message: { text: message, name: member.username },
    });
  };

  return (
    <main>
      <ChatAppWrapper>
        <UsersWrapper>
          {" Currently active users"}
          <UsersList>
            <User></User>
          </UsersList>
        </UsersWrapper>
        <MessagingWrapper>
          <MessagesWrapper>
            <MessagesContainer id="handleScroll">
              {messages.map((messageContent, index) => (
                (<Message
                  myMessage={messageContent.data.name === member.username}
                  key={index}
                  user={messageContent.data.name}
                  messageText={messageContent.data.text}
                  time={messageContent.timestamp}
                ></Message>
              )))}
            </MessagesContainer>
          </MessagesWrapper>
          <Input handlerSendMessage={handleSubmit}></Input>
        </MessagingWrapper>
      </ChatAppWrapper>
    </main>
  );
};
export default ChatApp;
