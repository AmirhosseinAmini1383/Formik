import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام خود را وارد کنید"),
  username: Yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  email: Yup.string()
    .required("لطفا ایمیل خود را وارد کنید")
    .email("لطفا قالب ایمیل را رعایت کنید مثال : amir@gmail.com"),
  password: Yup.string()
    .required("لطفا گذرواژه خود را وارد کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
});
export default validationSchema;
