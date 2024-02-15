import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../Personal/PersonalError";

const Input = (props) => {
  const { label, type, name } = props;
  return (
    <div className="displayform">
      <label className="form-label">{label}</label>
      <FastField type={type} className="form-control" name={name} />
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Input;
