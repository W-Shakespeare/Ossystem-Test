import React from "react";
import PropTypes from "prop-types";

const ProcessorListInformation = ({
  sumOfPrice,
  average,
  amountItems,
  willClearAllProcessor,
}) => {
  return (
    <div className="processorListInformationWrapper">
      <div className="processorListInformation">
        <p className="item1">{`Общее кол-во товаров ${amountItems}`}</p>
        <p className="item2">{`Общая сумма ${sumOfPrice} грн`}</p>
        <p className="item3">{`Средняя цена ${average} грн`}</p>
        <button className="item4" onClick={willClearAllProcessor}>
          Очистить каталог
        </button>
      </div>
    </div>
  );
};
ProcessorListInformation.propTypes = {
  sumOfPrice: PropTypes.number,
  average: PropTypes.string,
  amountItems: PropTypes.number,
  willClearAllProcessor: PropTypes.func,
};

export default ProcessorListInformation;
