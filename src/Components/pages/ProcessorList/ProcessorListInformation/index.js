import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllProcessors } from "../redux/actions/actions";
import ProcessorListInformation from "./ProcessorListInformation";
import "./style.css";

const ProcessorListInformationContainer = () => {
  const processorArr = useSelector((state) => state.catalog.processor);
  const dispatch = useDispatch();

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

export default ProcessorListInformationContainer;
