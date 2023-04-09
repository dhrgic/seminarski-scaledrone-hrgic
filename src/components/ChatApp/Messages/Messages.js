import React from "react";
import PropTypes from "prop-types";
import "./Messages.scss";
import LogoReact from "../../../assets/images/React-icon.svg.png";

const Messages = (props) => {
  return (
    <div className="MessagesWrapper">
      <div className="MessagesContainer">
        <div className="Message">
          <div className="MessageHeader">
            <div className="MessageSender">
              <figure className="Message-Figure">
                <img className="Message-Image" src={LogoReact} alt="" />
              </figure>
              <p>Name</p>
            </div>
            <div className="MessageTime">
              <p>12:31</p>
            </div>
          </div>
          <div className="MessageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, velit doloribus rerum, et officia enim magni eum
              ducimus illum placeat expedita impedit, aliquam perspiciatis
              commodi delectus dolorum magnam veritatis qui?
            </p>
          </div>
        </div>
        <div className="Message">
          <div className="MessageHeader">
            <div className="MessageSender">
              <figure className="Message-Figure">
                <img className="Message-Image" src={LogoReact} alt="" />
              </figure>
              <p>Name</p>
            </div>
            <div className="MessageTime">
              <p>12:31</p>
            </div>
          </div>
          <div className="MessageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, velit doloribus rerum, et officia enim magni eum
              ducimus illum placeat expedita impedit, aliquam perspiciatis
              commodi delectus dolorum magnam veritatis qui?
            </p>
          </div>
        </div>
        <div className="Message">
          <div className="MessageHeader">
            <div className="MessageSender">
              <figure className="Message-Figure">
                <img className="Message-Image" src={LogoReact} alt="" />
              </figure>
              <p>Name</p>
            </div>
            <div className="MessageTime">
              <p>12:31</p>
            </div>
          </div>
          <div className="MessageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, velit doloribus rerum, et officia enim magni eum
              ducimus illum placeat expedita impedit, aliquam perspiciatis
              commodi delectus dolorum magnam veritatis qui?
            </p>
          </div>
        </div>
        <div className="Message">
          <div className="MessageHeader">
            <div className="MessageSender">
              <figure className="Message-Figure">
                <img className="Message-Image" src={LogoReact} alt="" />
              </figure>
              <p>Name</p>
            </div>
            <div className="MessageTime">
              <p>12:31</p>
            </div>
          </div>
          <div className="MessageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, velit doloribus rerum, et officia enim magni eum
              ducimus illum placeat expedita impedit, aliquam perspiciatis
              commodi delectus dolorum magnam veritatis qui?
            </p>
          </div>
        </div>
        <div className="Message">
          <div className="MessageHeader">
            <div className="MessageSender">
              <figure className="Message-Figure">
                <img className="Message-Image" src={LogoReact} alt="" />
              </figure>
              <p>Name</p>
            </div>
            <div className="MessageTime">
              <p>12:31</p>
            </div>
          </div>
          <div className="MessageText">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, velit doloribus rerum, et officia enim magni eum
              ducimus illum placeat expedita impedit, aliquam perspiciatis
              commodi delectus dolorum magnam veritatis qui?
            </p>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

Messages.propTypes = {};

export default Messages;
