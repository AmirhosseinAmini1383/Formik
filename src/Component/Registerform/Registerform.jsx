import React from "react";
import "./Registerform.css";
import { useFormik } from "formik";
import initialValues from "../useFormik/initialValues";
import { onSubmit } from "../useFormik/onSubmit";
// import { validate } from "../useFormik/Validate";
import validationSchema from "../useFormik/ValidationSchema";

const Registerform = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log(formik);
  return (
    <div>
      <h1 className="title">F8-Formik</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="displayform">
          <label className="form-label">نام و نام خانوادگی</label>
          <input
            type="text"
            className="form-control"
            name="name"
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <small className="err-validate">*{formik.errors.name}</small>
          ) : null}
        </div>
        <div className="displayform">
          <label className="form-label">نام کاربری</label>
          <input
            type="text"
            className="form-control"
            name="username"
            // value={formik.values.username}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("username")}
          />
          {formik.errors.username && formik.touched.username ? (
            <small className="err-validate">*{formik.errors.username}</small>
          ) : null}
        </div>
        <div className="displayform">
          <label className="form-label">ایمیل</label>
          <input
            type="email"
            className="form-control"
            name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <small className="err-validate">*{formik.errors.email}</small>
          ) : null}
        </div>
        <div className="displayform">
          <label className="form-label">گذرواژه</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <small className="err-validate">*{formik.errors.password}</small>
          ) : null}
        </div>
        <div className="btnform">
          <button type="button" className="btn Back">
            بازگشت
          </button>
          <button type="submit" className="btn Add">
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registerform;
