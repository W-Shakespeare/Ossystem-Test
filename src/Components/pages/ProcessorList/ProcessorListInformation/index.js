import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearAllProcessors } from "../redux/actions/actions";
import ProcessorListInformation from "./ProcessorListInformation";
import "./style.css";

const ProcessorListInformationContainer = ({ dispatch, processorArr }) => {
  const [sumOfPrice, setSumOfPrice] = useState(null);
  const [average, setAverage] = useState(null);
  const [amountItems, setAmountItems] = useState(processorArr.length);

  useEffect(() => {
    setAmountItems(processorArr.length);
    getCalculatedProcessorInformation();
  }, [processorArr]);

  const getCalculatedProcessorInformation = () => {
    calculateAverage(calculateSumOfPrice());
  };
  const calculateSumOfPrice = () => {
    let result = processorArr.reduce((acc, next) => {
      return acc + +next.price2;
    }, 0);
    setSumOfPrice(result);
    return result;
  };
  const calculateAverage = (sumOfPrice) => {
    setAverage((sumOfPrice / processorArr.length).toFixed(2));
  };

  const willClearAllProcessor = () => {
    dispatch(clearAllProcessors());
  };

  return (
    <>
      <ProcessorListInformation
        sumOfPrice={sumOfPrice}
        average={average}
        amountItems={amountItems}
        willClearAllProcessor={willClearAllProcessor}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    processorArr: state.catalog.processor,
  };
}

ProcessorListInformationContainer.propTypes = {
  dispatch: PropTypes.func,
  processorArr: PropTypes.array,
};

export default connect(
  mapStateToProps,
  null
)(ProcessorListInformationContainer);
