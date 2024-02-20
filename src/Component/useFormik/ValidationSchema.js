import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام خود را وارد کنید"),
  username: Yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  // bio: Yup.string().required("لطفا بیوگرافی خود را وارد کنید"),
  email: Yup.string()
    .required("لطفا ایمیل خود را وارد کنید")
    .email("لطفا قالب ایمیل را رعایت کنید مثال : amir@gmail.com"),
  password: Yup.string()
    .required("لطفا گذرواژه خود را وارد کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید")
    .max(10, "حداکثر 10 کاراکتر وارد کنید"),
  address: Yup.object({
    city: Yup.string().required("لطفا نام شهر خود را وارد کنید"),
    postalcode: Yup.string()
      .required("لطفا کدپستی خود را وارد کنید")
      .min(10, "کد پستی 10 رقم میباشد")
      .max(10, "کد پستی 10 رقم میباشد"),
  }),

  phone: Yup.array().of(
    Yup.string()
      .required("لطفا شماره خود را وارد کنید")
      .min(10, "لطفا شماره خود را به درستی وارد کنید")
      .max(11, "شماره 11 رقم میباشد")
  ),
  favorits: Yup.array().of(
    Yup.string().required("لطفا علایق خود را وارد کنید")
  ),
  education: Yup.string().required("لطفا تحصیلات خود را انتخاب کنید"),
  gender: Yup.string().required("لطفا جنسیت خود را انتخاب کنید"),
  skill: Yup.array().of(
    Yup.string().required("لطفا حرفه و تخصص خود را انتخاب کنید")
  ),
});
export default validationSchema;
