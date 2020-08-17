import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./style.css";
import { deleteProcessor } from "../redux/actions/actions";
import Processor from "./Processor";
const ProcessorContainer = ({ id, name, img, description, price }) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.catalog.isAdmin);
  const processorArr = useSelector((state) => state.catalog.processorArr);
  const deleteSelectedProcessor = (id) => {
    dispatch(deleteProcessor(id));
  };
  return (
    <>
      <Processor
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

ProcessorContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default ProcessorContainer;
