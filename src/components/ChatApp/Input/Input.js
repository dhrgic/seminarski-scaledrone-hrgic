import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

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
    <>
      <input
        onChange={onChange}
        value={message}
        type="text"
        placeholder="Start chatting..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && message.length > 0) {
            handleSendMessage();
          }
        }}
      />
      <button
        onClick={handleSendMessage}
        disabled={message.length > 0 ? false : true}
      >
        Send
      </button>
    </>
  );
};

Input.propTypes = {
  handlerSendMessage: PropTypes.func,
};

export default Input;
