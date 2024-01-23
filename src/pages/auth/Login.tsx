import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextInput } from "../../components/TextInput/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const validationSchema = Yup.object({
  password: Yup.string().trim().required("Required field"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required field"),
});

function Login() {
  const navigte = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    async onSubmit(values, { resetForm }) {
      try {
        const response = await axios.post(
          "http://localhost:3001/login",
          values
        );
        const data = await response.data.loginToken;
        if (data) {
          localStorage.setItem("token", data);
          navigte("/");
        }
      } catch (error) {
        console.log(error);
        setInvalid(true);
      }

      resetForm();
    },
  });
  return (
    <div className=" h-screen flex items-center bg-container">
      <div className=" flex  w-3/4 m-auto p-5">
        <div className="w-1/2 m-auto bg-secondary p-5 rounded-2xl">
          <h1 className="text-center font-extrabold text-3xl italic text-primary">
            Welcome to Shopping page
          </h1>
          <p className="text-center font-semibold text-xl my-2 text-primary">
            Login
          </p>
          <p className={`${invalid ? " text-error" : " hidden"}`}>
            Invalid email and password
          </p>
          <form
            className="space-y-6 mt-5 flex flex-col"
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.email}
              errors={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
            <TextInput
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.password}
              errors={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />
            <button
              type="button"
              className="w-1/3 flex justify-center mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-primary/80 duration-200 text-center bg-primary px-10 py-5 text-secondary rounded-full"
              onClick={() => {
                formik.submitForm();
              }}
            >
              Submit
            </button>
          </form>
          <div className="text-center my-5">
            Don't have an account yet ?
            <span className="pl-2 text-primary">
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
