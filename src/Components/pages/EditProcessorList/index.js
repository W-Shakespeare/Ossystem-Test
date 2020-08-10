import React, { useState } from "react";
import PropTypes from "prop-types";
import EditProcessorList from "./EditProcessorList";
import { connect } from "react-redux";
import { addProcessor } from "./redux/actions/actions";

const EditProcessorListContainer = ({ dispatch, isAdmin }) => {
  const [formValue, setFormValue] = useState({
    id: undefined,
    name: undefined,
    description: undefined,
    price2: undefined,
    src: undefined,
    imgLoad: true,
  });

  const [imgLoad, setImgLoad] = useState(true);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.currentTarget[0].files[0];
    reader.onloadend = () => {
      let imagePreviewUrl = reader.result;
      setFormValue((prev) => ({
        ...prev,
        src: imagePreviewUrl,
        id: Date.now(),
      }));
      setImgLoad(false);
    };

    reader.readAsDataURL(file);
  };

  const willAddProcessor = (e) => {
    e.preventDefault();
    dispatch(addProcessor(formValue));
  };
  return (
    <>
      <EditProcessorList
        nameValue={formValue.name}
        descriptionValue={formValue.description}
        priceValue={formValue.price2}
        onInputChange={onInputChange}
        willAddProcessor={willAddProcessor}
        handleImageChange={handleImageChange}
        imgLoad={imgLoad}
        isAdmin={isAdmin}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    isAdmin: state.catalog.isAdmin,
  };
}

EditProcessorListContainer.propTypes = {
  dispatch: PropTypes.func,
  isAdmin: PropTypes.bool,
};

export default connect(mapStateToProps, null)(EditProcessorListContainer);
