import React from "react";
import PropTypes from "prop-types";

const Processor = ({
  id,
  name,
  img,
  description,
  price,
  isAdmin,
  deleteSelectedProcessor,
}) => {
  return (
    <div
      className={name === "Intel" ? "processorCard intel" : "processorCard amd"}
    >
      <div>{name}</div>
      <div>
        <img src={img} alt={name}></img>
      </div>

      <div>{description}</div>
      <div>{`Цена ${price} грн`}</div>
      <button disabled={!isAdmin} onClick={() => deleteSelectedProcessor(id)}>
        Удалить
      </button>
    </div>
  );
};
Processor.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  processorArr: PropTypes.array,
  isAdmin: PropTypes.bool,
  deleteSelectedProcessor: PropTypes.func,
};

export default Processor;
