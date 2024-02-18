import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../Personal/PersonalError";
import { Fragment } from "react";

const Radio = (props) => {
  const { label, option, name } = props;
  return (
    <div>
      <div className="displayform">
        <label className="form-label">{label}</label>
      </div>
      <div className="displayRadio">
        <FastField className="form-control" name={name}>
          {({ field }) => {
            return option.map((o) => (
              <Fragment key={o.id}>
                <input
                  type="radio"
                  {...field}
                  value={o.id}
                  checked={field.value == o.id}
                />
                <label className="radio">{o.value}</label>
              </Fragment>
            ));
          }}
        </FastField>
      </div>
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Radio;
