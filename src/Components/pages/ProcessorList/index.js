import React from "react";
import PropTypes from "prop-types";
import ProcessorList from "./ProcessorList";
import "./style.css";
import { connect } from "react-redux";

const ProcessorListContainer = ({ processorArr }) => {
  return (
    <div className="processorListWrapper">
      <ProcessorList processorArr={processorArr} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    processorArr: state.catalog.processor,
  };
}

ProcessorListContainer.propTypes = {
  processorArr: PropTypes.array,
};
export default connect(mapStateToProps, null)(ProcessorListContainer);
