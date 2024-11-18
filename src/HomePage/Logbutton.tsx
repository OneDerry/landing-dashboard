import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";


const signInValidationSchema = Yup.object().shape({
  userId: Yup.string()
    .min(2, "name is too short")
    .max(20, "name is too long")
    .required("name is required"),
  email: Yup.string()
    .required("email is required")
    .email( "invalid email"),
  password: Yup.string().required("password is required"),
});

export default function Logbutton() {
  const navigate = useNavigate();

  return (
    <div className="mt-4 bg-zinc-300 p-2 rounded-xl ">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signInValidationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            if (values) {
              toast.success("Logged in successfully!");
              navigate("/dashboard");
            }
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {() => (
          <Form className="grid grid-cols-2 items-center justify-center p-2">
            <div className="flex flex-col items-center gap-4 p-1">
              <label htmlFor="name" className="text-white">
                User Id
              </label>
              <Field type="text" name="userId" className="rounded p-1" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col items-center gap-4 p-1">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <Field type="email" name="email" className="rounded p-1" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col items-center gap-4 p-1">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <Field type="password" name="password" className="rounded p-1" />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mt-9 p-2 ">
              <button
                type="submit"
                className="bg-black rounded-sm w-full h-9 transition-transform delay-1000 hover:bg-gradient-to-r from-orange-800 text-white"
              >
                Login
              </button>
            </div>
            <Toaster position="top-right" richColors />
          </Form>
        )}
      </Formik>
    </div>
  );
}
