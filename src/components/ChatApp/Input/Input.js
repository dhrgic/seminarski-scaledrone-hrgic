import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { InputWrapper, MessagesInput, InputButton } from "./InputStyles";

const Input = ({ handlerSendMessage }) => {
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    handlerSendMessage(message);
    setMessage("");
  };

  return (
    <InputWrapper>
      <MessagesInput
        onChange={onChange}
        value={message}
        rows={2}
        type="text"
        placeholder="Start chatting..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && message.length > 0) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />
      <InputButton
        onClick={handleSendMessage}
        disabled={message.length > 0 ? false : true}
      >
        Send
      </InputButton>
    </InputWrapper>
  );
};

Input.propTypes = {
  handlerSendMessage: PropTypes.func,
};

export default Input;
