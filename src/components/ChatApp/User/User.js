import React from "react";
import PropTypes from "prop-types";

const User = ({ username, color }) => {
  return (
    <div className="User">
      <div className="UserColor" style={{ backgroundColor: `${color}` }}></div>
      <p>{username}</p>
    </div>
  );
};

User.propTypes = {};

export default User;
