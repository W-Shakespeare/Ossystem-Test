import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import EditProcessorList from "./EditProcessorList";
import { addProcessor } from "./redux/actions/actions";

const EditProcessorListContainer = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.catalog.isAdmin);

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

export default EditProcessorListContainer;
