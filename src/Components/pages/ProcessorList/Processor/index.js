import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { connect } from "react-redux";
import { deleteProcessor } from "../redux/actions/actions";
import Processor from "./Processor";
const ProcessorContainer = ({
  dispatch,
  processorArr,
  isAdmin,
  key,
  id,
  name,
  img,
  description,
  price,
}) => {
  const deleteSelectedProcessor = (id) => {
    dispatch(deleteProcessor(id));
  };
  return (
    <>
      <Processor
        key={key}
        id={id}
        name={name}
        img={img}
        description={description}
        price={price}
        processorArr={processorArr}
        isAdmin={isAdmin}
        deleteSelectedProcessor={deleteSelectedProcessor}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    processorArr: state.catalog.processor,
    isAdmin: state.catalog.isAdmin,
  };
}

ProcessorContainer.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.number,
  key: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  processorArr: PropTypes.array,
  isAdmin: PropTypes.bool,
};

export default connect(mapStateToProps, null)(ProcessorContainer);
