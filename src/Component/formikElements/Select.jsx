import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../Personal/PersonalError";

const Select = (props) => {
  const { label, option, name } = props;
  return (
    <div className="displayform">
      <label className="form-label">{label}</label>
      <FastField as="select" className="form-control" name={name}>
        {option.map((o) => (
          <option key={o.id} value={o.id}>
            {o.value}
          </option>
        ))}
      </FastField>
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Select;
