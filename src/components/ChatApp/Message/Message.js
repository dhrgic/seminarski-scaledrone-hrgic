import React from "react";
import PropTypes from "prop-types";
import "./Messages.scss";
import LogoReact from "../../../assets/images/React-icon.svg.png";

const Messages = ({ user, messageText, id }) => {
  return (
    <div className="Message">
      <div className="MessageHeader">
        <div className="MessageSender">
          <figure className="Message-Figure">
            <img className="Message-Image" src={LogoReact} alt="" />
          </figure>
          <p>{user}</p>
        </div>
        <div className="MessageTime">
          <p>12:31</p>
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
};

export default Messages;
