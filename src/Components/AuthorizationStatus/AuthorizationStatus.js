import React from "react";
import PropTypes from "prop-types";

const AuthorizationStatus = ({ isAdmin, onChangeAuthorizationStatus }) => {
  return (
    <div className="authorization">
      {isAdmin ? (
        <button onClick={onChangeAuthorizationStatus} className="logout">
          Logout
        </button>
      ) : (
        <button onClick={onChangeAuthorizationStatus} className="login">
          Login
        </button>
      )}
    </div>
  );
};

AuthorizationStatus.propTypes = {
  isAdmin: PropTypes.bool,
  onChangeAuthorizationStatus: PropTypes.func,
};
export default AuthorizationStatus;
