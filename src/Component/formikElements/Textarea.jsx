import { ErrorMessage, FastField } from "formik";
import React from "react";
import { validateBio } from "../useFormik/Validate";
import PersonalError from "../Personal/PersonalError";

const Textarea = (props) => {
  const { label, name } = props;
  return (
    <div className="displayform">
      <label className="form-label">{label}</label>
      <FastField
        className="form-control bio-textarea"
        name={name}
        as="textarea"
        validate={validateBio}
      />
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Textarea;
