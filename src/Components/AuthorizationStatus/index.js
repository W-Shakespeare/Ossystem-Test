import React from "react";
import AuthorizationStatus from "./AuthorizationStatus";
import { changeAuthorizationStatus } from "../pages/ProcessorList/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const AuthorizationStatusContainer = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.catalog.isAdmin);
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
export default AuthorizationStatusContainer;
