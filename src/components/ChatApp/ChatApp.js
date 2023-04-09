import React from "react";
import {
  ChatAppWrapper,
  MessagingWrapper,
  InputWrapper,
} from "../../lib/style/generalStyles";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";

const ChatApp = () => {
  const handleSubmit = (message) => {
    console.log(message);
  };

  return (
    <main>
      <ChatAppWrapper>
        <Users></Users>
        <MessagingWrapper>
          <Messages></Messages>
          <InputWrapper>
            <Input handlerSendMessage={handleSubmit}></Input>
          </InputWrapper>
        </MessagingWrapper>
      </ChatAppWrapper>
    </main>
  );
};

export default ChatApp;
