import React from "react";
import PropTypes from "prop-types";

const ProcessorListInformation = ({
  sumOfPrice,
  average,
  amountItems,
  isAdmin,
  willClearAllProcessor,
}) => {
  return (
    <div className="processorListInformationWrapper">
      <div className="processorListInformation">
        <p className="item1">{`Общее кол-во товаров ${amountItems}`}</p>
        <p className="item2">{`Общая сумма ${sumOfPrice} грн`}</p>
        <p className="item3">{`Средняя цена ${average} грн`}</p>
        <button
          className="item4"
          onClick={willClearAllProcessor}
          disabled={!isAdmin}
        >
          Очистить каталог
        </button>
      </div>
    </div>
  );
};
ProcessorListInformation.propTypes = {
  sumOfPrice: PropTypes.number,
  average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  amountItems: PropTypes.number,
  isAdmin: PropTypes.bool,
  willClearAllProcessor: PropTypes.func,
};

export default ProcessorListInformation;
