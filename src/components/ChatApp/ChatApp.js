import React, { useEffect, useState } from "react";
import {
  ChatAppWrapper,
  MessagesContainer,
  MessagingWrapper,
  MessagesWrapper,
  EmptyContainerMessage,
  ActiveUser,
} from "../../lib/style/generalStyles";
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
        handleReceiveMsg(message);
      });
    };
    // RECEIVING MESSAGES FROM SCALEDRONE
    const handleReceiveMsg = (message) => {
      setMessages((messages) => [...messages, message]);
    };

    if (drone && !member.username) {
      droneEvents();
    }
    const messageDiv = document.getElementById("handleScroll");
    messageDiv.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  }, [drone, member, room, messages]);

  const handleSubmit = (message) => {
    drone.publish({
      room: "observable-room",
      message: { text: message, name: member.username, color: member.color },
    });
  };

  return (
    <main>
      <ChatAppWrapper>
        <MessagingWrapper>
          <ActiveUser style={{ color: `${member.color}` }}>
            You are chatting as {member.username}
          </ActiveUser>
          <MessagesWrapper>
            <MessagesContainer id="handleScroll">
              {messages.length === 0 ? (
                <EmptyContainerMessage>
                  Woow!
                  <br /> This is kinda empty.
                  <br /> Why don't you try writing your first message?{" "}
                </EmptyContainerMessage>
              ) : (
                messages.map((messageContent, index) => (
                  <Message
                    myMessage={messageContent.data.name === member.username}
                    key={index}
                    user={messageContent.data.name}
                    messageText={messageContent.data.text}
                    time={messageContent.timestamp}
                    color={messageContent.data.color}
                  ></Message>
                ))
              )}
            </MessagesContainer>
          </MessagesWrapper>
          <Input handlerSendMessage={handleSubmit}></Input>
        </MessagingWrapper>
      </ChatAppWrapper>
    </main>
  );
};
export default ChatApp;
