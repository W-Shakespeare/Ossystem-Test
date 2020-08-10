import React from "react";
import PropTypes from "prop-types";
import Processor from "./Processor";
import ProcessorListInformation from "./ProcessorListInformation";

const ProcessorList = ({ processorArr }) => {
  return (
    <>
      <div className="processorList">
        {processorArr.map(({ id, classs, src, description, price2 }) => {
          return (
            <Processor
              key={id}
              id={id}
              name={classs}
              img={src}
              description={description}
              price={price2}
            />
          );
        })}
      </div>
      <ProcessorListInformation />
    </>
  );
};

ProcessorList.propTypes = {
  processorArr: PropTypes.array.isRequired,
};

export default ProcessorList;
