import React from "react";
import PropTypes from "prop-types";
import "./Message.scss";

const Messages = ({ user, messageText, myMessage, time, color }) => {
  const getTime = new Date(time * 1000);
  const hours = getTime.getHours();
  const minutes =
    getTime.getMinutes() < 10
      ? "0" + getTime.getMinutes()
      : getTime.getMinutes();

  const formattedtime = hours + ":" + minutes;

  return (
    <div className={`Message ${myMessage ? "MyMessage" : ""} `}>
      <div className="Message-Header">
        <div className="Message-Sender">
          <div
            className="Message-SenderColor"
            style={{ backgroundColor: color }}
          ></div>
          <p className="Message-SenderName">{user.toUpperCase()}</p>
        </div>
      </div>
      <div className="Message-Text">
        <p>{messageText}</p>
      </div>
      <div className="Message-Time">
        <p>{formattedtime}</p>
      </div>
    </div>
  );
};

Messages.propTypes = {
  messageText: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  myMessage: PropTypes.bool,
  time: PropTypes.number,
  color: PropTypes.string,
};

export default Messages;
