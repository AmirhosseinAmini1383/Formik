import React from "react";

const PersonalField = ({ field, form, meta }) => {
  console.log(field, form, meta);
  return (
    <>
      <input type="password" className="form-control" {...field} />
      {meta.touched && meta.error ? (
        <span className="err-validate">*{meta.error}</span>
      ) : null}
    </>
  );
};

export default PersonalField;
