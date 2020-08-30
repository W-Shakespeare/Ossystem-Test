import React from "react";
import { useSelector } from "react-redux";
import ProcessorList from "./ProcessorList";
import "./style.css";

const ProcessorListContainer = () => {
  const processorArr = useSelector((state) => state.catalog.processor);
  return (
    <div className="processorListWrapper">
      <ProcessorList processorArr={processorArr} />
    </div>
  );
};
export default ProcessorListContainer;
