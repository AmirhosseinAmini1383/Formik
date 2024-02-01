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
  });
  // console.log(formik);
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
          />
        </div>
        <div className="displayform">
          <label className="form-label">نام کاربری</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="displayform">
          <label className="form-label">ایمیل</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="displayform">
          <label className="form-label">گذرواژه</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
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
