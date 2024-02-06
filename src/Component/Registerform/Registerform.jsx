import React from "react";
import "./Registerform.css";
import { useFormik } from "formik";
const Registerform = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "لطفا نام خود را وارد کنید";
      }
      if (!values.username) {
        errors.username = "لطفا نام کاربری خود را وارد کنید";
      }
      if (!values.email) {
        errors.email = "لطفا ایمیل خود را وارد کنید";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : amir@gmail.com";
      }
      if (!values.password) {
        errors.password = "لطفا گذرواژه خود را وارد کنید";
      }
      return errors;
    },
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
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
