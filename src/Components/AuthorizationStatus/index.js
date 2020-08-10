import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthorizationStatus from "./AuthorizationStatus";
import { changeAuthorizationStatus } from "../pages/ProcessorList/redux/actions/actions";

const AuthorizationStatusContainer = ({ dispatch, isAdmin, state }) => {
  const onChangeAuthorizationStatus = () => {
    dispatch(changeAuthorizationStatus());
  };
  return (
    <AuthorizationStatus
      isAdmin={isAdmin}
      onChangeAuthorizationStatus={onChangeAuthorizationStatus}
    />
  );
};

function mapStateToProps(state) {
  return {
    isAdmin: state.catalog.isAdmin,
    state,
  };
}

AuthorizationStatusContainer.propTypes = {
  state: PropTypes.shape({
    catalog: PropTypes.shape({
      isAdmin: PropTypes.bool,
      processor: PropTypes.array,
    }),
  }),
};

export default connect(mapStateToProps, null)(AuthorizationStatusContainer);
