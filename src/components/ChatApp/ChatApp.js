import React, { useEffect } from "react";
import {
  ChatAppWrapper,
  MessagesContainer,
  MessagingWrapper,
  MessagesWrapper,
} from "../../lib/style/generalStyles";
import Users from "./Users/Users";
import Message from "./Message/Message";
import Input from "./Input/Input";

const ChatApp = () => {
  useEffect(() => {
    /*on mount the app creates a new instance od scaledrone*/
    const drone = new window.Scaledrone("m6JW7Uqicd8McHR1");

    const room = drone.subscribe("observable-room");

    room.on("open", (error) => {
      if (error) {
        window.alert("There was an error connecting to the room");
      } else {
        console.log("Success");
      }
    });
  }, []);
  const handleSubmit = (message) => {};

  return (
    <main>
      <ChatAppWrapper>
        <Users></Users>
        <MessagingWrapper>
          <MessagesWrapper>
            <MessagesContainer>
              <Message></Message>
            </MessagesContainer>
          </MessagesWrapper>
          <Input handlerSendMessage={handleSubmit}></Input>
        </MessagingWrapper>
      </ChatAppWrapper>
    </main>
  );
};

export default ChatApp;
