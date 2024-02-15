import React, { useEffect, useState } from "react";
import "./Registerform.css";
import { ErrorMessage, FastField, FieldArray, Form, Formik } from "formik";
import initialValues from "../useFormik/initialValues";
import { onSubmit } from "../useFormik/onSubmit";
// import { validate } from "../useFormik/Validate";
import validationSchema from "../useFormik/ValidationSchema";
import PersonalField from "../Personal/PersonalField";
import PersonalError from "../Personal/PersonalError";
import Favorits from "../Personal/Favorits";
import { validateBio } from "../useFormik/Validate";
import FormikControl from "../formikElements/FormikControl";
const Registerform = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   // validate,
  // });
  // console.log(formik);
  const handleSaveData = (formik) => {
    localStorage.setItem("SaveData", JSON.stringify(formik.values));
  };
  const [saveData, setSaveData] = useState(null);
  const [myValues, setMyValues] = useState(null);

  const handleGetData = () => {
    setMyValues(saveData);
  };
  useEffect(() => {
    const localSaveData = JSON.parse(localStorage.getItem("SaveData"));
    setSaveData(localSaveData);
  }, []);
  return (
    <Formik
      initialValues={myValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
      // validateOnMount
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik) => {
        // console.log(formik);
        // formik.validateField("bio")
        // formik.validateForm();
        // formik.setFieldTouched("bio");
        // formik.setTouched({ name: true, email: true, bio: true });
        return (
          <div>
            <h1 className="title">F8-Formik</h1>
            <Form>
              <div className="form">
                <FormikControl
                  control="input"
                  type="text"
                  label="نام و نام خانوادگی"
                  name="name"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="نام کاربری"
                  name="username"
                />
                <FormikControl control="textarea" label="بیوگرافی" name="bio" />
                <FormikControl
                  control="input"
                  type="email"
                  label="ایمیل"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="گذرواژه"
                  name="password"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="نام شهر"
                  name="address.city"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="کد پستی"
                  name="address.postalcode"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="شماره موبایل"
                  name="phone[0]"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="شماره تلفن ثابت"
                  name="phone[1]"
                />
                <div className="displayform">
                  <FieldArray
                    type="text"
                    className="form-control"
                    name="favorits"
                  >
                    {(props) => <Favorits {...props} />}
                  </FieldArray>
                </div>
                <div className="btnform">
                  <button
                    type="submit"
                    className="btn Add"
                    disabled={
                      !(formik.dirty && formik.isValid) || formik.isSubmitting
                    }
                  >
                    {formik.isSubmitting ? (
                      <span className="visually-hidden">Loading...</span>
                    ) : (
                      "ثبت نام"
                    )}
                  </button>
                  {formik.dirty && formik.isValid ? (
                    <button
                      type="button"
                      className="btn save"
                      onClick={() => handleSaveData(formik)}
                    >
                      ذخیره اطلاعات
                    </button>
                  ) : null}
                  {saveData ? (
                    <button
                      type="button"
                      className="btn get"
                      onClick={() => handleGetData()}
                    >
                      بازیابی اطلاعات
                    </button>
                  ) : null}
                  {formik.dirty ? (
                    <button type="reset" className="btn reset">
                      ریست
                    </button>
                  ) : null}
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Registerform;
