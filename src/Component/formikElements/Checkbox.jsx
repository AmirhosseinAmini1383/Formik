import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../Personal/PersonalError";
import { Fragment } from "react";

const Checkbox = (props) => {
  const { label, option, name } = props;
  return (
    <div>
      <div className="displayform">
        <label className="form-label">{label}</label>
      </div>
      <div className="displayRadio">
        <FastField className="form-control" name={name}>
          {({ field }) => {
            console.log(field);
            return option.map((o) => (
              <Fragment key={o.id}>
                <input
                  type="checkbox"
                  id={o.value}
                  {...field}
                  value={o.value}
                  checked={field.value && field.value.includes(o.value)}
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

export default Checkbox;
