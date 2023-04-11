import React from "react";
import PropTypes from "prop-types";
import "./Message.scss";
import LogoReact from "../../../assets/images/React-icon.svg.png";

const Messages = ({ user, messageText, myMessage, time }) => {
  return (
    <div className={`Message ${myMessage ? "" : "MyMessage"} `}>
      <div className="MessageHeader">
        <div className="MessageSender">
          <figure className="Message-Figure">
            <img className="Message-Image" src={LogoReact} alt="" />
          </figure>
          <p>{user.toUpperCase()}</p>
        </div>
        <div className="MessageTime">
          <p>{time}</p>
        </div>
      </div>
      <div className="MessageText">
        <p>{messageText}</p>
      </div>
    </div>
  );
};

Messages.propTypes = {
  messageText: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  myMessage: PropTypes.bool,
  time: PropTypes.string,
};

export default Messages;
