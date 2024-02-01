import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <h1 className="title">F8-Formik</h1>
      <form className="form">
        <div className="displayform">
          <label className="form-label">نام و نام خانوادگی</label>
          <input type="text" className="form-control" />
        </div>
        <div className="displayform">
          <label className="form-label">نام کاربری</label>
          <input type="text" className="form-control" />
        </div>
        <div className="displayform">
          <label className="form-label">ایمیل</label>
          <input type="email" className="form-control" />
        </div>
        <div className="displayAddress">
          <label className="form-label address">آدرس</label>
          <div>
            <input type="text" className="form-control" placeholder="شهر" />
          </div>
          <div>
            <input type="text" className="form-control" placeholder="خیابان" />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="ادامه آدرس"
            />
          </div>
          <div>
            <input type="text" className="form-control" placeholder="کد پستی" />
          </div>
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

export default Form;
