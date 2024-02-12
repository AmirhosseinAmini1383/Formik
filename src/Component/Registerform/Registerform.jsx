import React from "react";
import "./Registerform.css";
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  useFormik,
} from "formik";
import initialValues from "../useFormik/initialValues";
import { onSubmit } from "../useFormik/onSubmit";
// import { validate } from "../useFormik/Validate";
import validationSchema from "../useFormik/ValidationSchema";
import PersonalField from "../Personal/PersonalField";
import PersonalError from "../Personal/PersonalError";

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
    >
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
              <FastField type="text" className="form-control" name="username" />
              <ErrorMessage name="username" component={PersonalError} />
            </div>
            <div className="displayform">
              <label className="form-label">بیوگرافی</label>
              <FastField
                type="text"
                className="form-control bio-textarea"
                name="bio"
                as="textarea"
              />
              <ErrorMessage name="bio" component={PersonalError} />
            </div>
            <div className="displayform">
              <label className="form-label">ایمیل</label>
              <FastField type="email" className="form-control" name="email" />
              <ErrorMessage name="email" component={PersonalError} />
            </div>
            <div className="displayform">
              <label className="form-label">گذرواژه</label>
              <FastField name="password">
                {(props) => <PersonalField {...props} />}
              </FastField>
            </div>
            <div className="btnform">
              <button type="button" className="btn Back">
                بازگشت
              </button>
              <button type="submit" className="btn Add">
                ذخیره
              </button>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Registerform;
