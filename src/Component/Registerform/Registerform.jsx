import React from "react";
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

const Registerform = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   // validate,
  // });
  // console.log(formik);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnMount
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik) => {
        console.log(formik);
        // formik.validateField("bio")
        // formik.validateForm();
        // formik.setFieldTouched("bio");
        // formik.setTouched({ name: true, email: true, bio: true });
        return (
          <div>
            <h1 className="title">F8-Formik</h1>
            <Form>
              <div className="form">
                <div className="displayform">
                  <label className="form-label">نام و نام خانوادگی</label>
                  <FastField type="text" className="form-control" name="name" />
                  <ErrorMessage name="name" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">نام کاربری</label>
                  <FastField
                    type="text"
                    className="form-control"
                    name="username"
                  />
                  <ErrorMessage name="username" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">بیوگرافی</label>
                  <FastField
                    type="text"
                    className="form-control bio-textarea"
                    name="bio"
                    as="textarea"
                    validate={validateBio}
                  />
                  <ErrorMessage name="bio" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">ایمیل</label>
                  <FastField
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="amir@gmail.com"
                  />
                  <ErrorMessage name="email" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">گذرواژه</label>
                  <FastField name="password">
                    {(props) => <PersonalField {...props} />}
                  </FastField>
                </div>
                <div className="displayform">
                  <label className="form-label">نام شهر</label>
                  <FastField
                    type="text"
                    className="form-control"
                    name="address.city"
                  />
                  <ErrorMessage name="address.city" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">کدپستی</label>
                  <FastField
                    type="number"
                    className="form-control"
                    name="address.postalcode"
                  />
                  <ErrorMessage
                    name="address.postalcode"
                    component={PersonalError}
                  />
                </div>
                <div className="displayform">
                  <label className="form-label">شماره موبایل</label>
                  <FastField
                    type="number"
                    className="form-control"
                    id="mobilephone"
                    name="phone[0]"
                    placeholder="09121234567"
                  />
                  <ErrorMessage name="phone[0]" component={PersonalError} />
                </div>
                <div className="displayform">
                  <label className="form-label">شماره تلفن ثابت</label>
                  <FastField
                    type="number"
                    className="form-control"
                    id="telephone"
                    name="phone[1]"
                    placeholder="021-55507120"
                  />
                  <ErrorMessage name="phone[1]" component={PersonalError} />
                </div>
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
