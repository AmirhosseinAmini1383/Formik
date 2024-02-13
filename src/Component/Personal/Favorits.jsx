import { ErrorMessage, Field } from "formik";
import React from "react";
import PersonalError from "./PersonalError";
import trash from "../../Icon/trash.png";
import add from "../../Icon/add.png";
const Favorits = (props) => {
  const { form, push, remove } = props;
  const { favorits } = form.values;
  return (
    <div className="FavDiv">
      <img src={add} alt="add" className="BtnAddFav" onClick={() => push("")} />
      <label className="form-label FavLabel">علایق</label>
      {favorits.map((f, i) => (
        <div key={i} className="displayform">
          <Field
            type="text"
            className="form-control FavInput"
            name={`favorits[${i}]`}
          />
          {favorits.length > 1 ? (
            <img
              src={trash}
              alt="remove"
              className="BtnRemoveFav"
              onClick={() => remove(i)}
            />
          ) : null}
          <ErrorMessage name={`favorits[${i}]`} component={PersonalError} />
        </div>
      ))}
    </div>
  );
};

export default Favorits;
