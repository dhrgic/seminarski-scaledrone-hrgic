import React from 'react'
import PropTypes from 'prop-types'
import LogoScaledrone from "../../assets/images/logo_white.svg";
import LogoReact from "../../assets/images/React-icon.svg.png"
import "./Header.scss";

const Header = ({currentUser="Danijel"}) => {
  return (
    <header className="Header">
      <div className="Header-Inner">
        <figure className="Header-Figure">
          <img className="Header-Image" src={LogoScaledrone} alt="Scaledrone logo" />
        </figure>
        <div className="Header-HeadingContainer">
          <h1 className="Header-Heading">Chat window for {currentUser}</h1>
          <p className="Header-Copywrite">Powered by Scaledrone® and React®</p>
        </div>
        <figure className="Header-Figure">
          <img className="Header-Image" src={LogoReact} alt="" />
        </figure>
      </div>
    </header>
  )
}

Header.propTypes = {
    currentUser: PropTypes.string,
}

export default Header