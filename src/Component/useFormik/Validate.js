export const validate = (values) => {
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
};
export const validateBio = (value) => {
  let error;
  if (!value) {
    error = "لطفا بیوگرافی خود را وارد کنید";
  } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
    error = "لطفا قالب نوشتاری را رعایت کنید...!";
  }
  return error;
};
