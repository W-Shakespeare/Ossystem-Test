import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const EditProcessorList = ({
  nameValue,
  descriptionValue,
  priceValue,
  imgLoad,
  isAdmin,
  onInputChange,
  willAddProcessor,
  handleImageChange,
}) => {
  return (
    <div className="editProcessorListWrapper">
      {isAdmin ? (
        <div className="editProcessorList">
          <form onSubmit={(e) => handleImageChange(e)}>
            <input type="file"></input>
            <button>Добавить изображения</button>
          </form>
          <form onSubmit={willAddProcessor}>
            <input
              required
              name="name"
              value={nameValue}
              placeholder="Названия добавляемого товара"
              onChange={(e) => onInputChange(e)}
            ></input>
            <input
              required
              name="description"
              value={descriptionValue}
              placeholder="Описание"
              onChange={(e) => onInputChange(e)}
            ></input>
            <input
              required
              name="price2"
              value={priceValue}
              placeholder="Стоимость добавляемого товара"
              onChange={(e) => onInputChange(e)}
            ></input>
            <button disabled={imgLoad}>Добавить товар в каталог</button>
          </form>
        </div>
      ) : (
        <p>Войдите в систему</p>
      )}
    </div>
  );
};

EditProcessorList.propTypes = {
  nameValue: PropTypes.string,
  descriptionValue: PropTypes.string,
  priceValue: PropTypes.string,
  imgLoad: PropTypes.bool,
  isAdmin: PropTypes.bool,
  onInputChange: PropTypes.func,
  willAddProcessor: PropTypes.func,
  handleImageChange: PropTypes.func,
};

export default EditProcessorList;
