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
              <FastField
                type="text"
                className="form-control"
                name="name"
                // // value={formik.values.name}
                // // onChange={formik.handleChange}
                // // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("name")}
              />
              {/* {formik.errors.name && formik.touched.name ? (
              <small className="err-validate">*{formik.errors.name}</small>
            ) : null} */}
              <ErrorMessage name="name" />
            </div>
            <div className="displayform">
              <label className="form-label">نام کاربری</label>
              <FastField
                type="text"
                className="form-control"
                name="username"
                // // value={formik.values.username}
                // // onChange={formik.handleChange}
                // // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("username")}
              />
              {/* {formik.errors.username && formik.touched.username ? (
              <small className="err-validate">*{formik.errors.username}</small>
            ) : null} */}
              <ErrorMessage name="username" />
            </div>
            <div className="displayform">
              <label className="form-label">ایمیل</label>
              <FastField
                type="email"
                className="form-control"
                name="email"
                // // value={formik.values.email}
                // // onChange={formik.handleChange}
                // // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("email")}
              />
              {/* {formik.errors.email && formik.touched.email ? (
              <small className="err-validate">*{formik.errors.email}</small>
            ) : null} */}
              <ErrorMessage name="email" />
            </div>
            <div className="displayform">
              <label className="form-label">گذرواژه</label>
              <FastField
                type="password"
                className="form-control"
                name="password"
                // // value={formik.values.password}
                // // onChange={formik.handleChange}
                // // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("password")}
              />
              {/* {formik.errors.password && formik.touched.password ? (
              <small className="err-validate">*{formik.errors.password}</small>
            ) : null} */}
              <ErrorMessage name="password" />
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
