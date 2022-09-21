import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../sharedPage/Loading";

// import Footer from "../../sharedPage/Footer";
const SignUp = () => {
  const [signUpError, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
  };
  let errorMessage;

  if (error) {
    errorMessage = <p className="text-red-600 font-serif">{error.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="h-screen w-full mx-auto flex flex-col justify-around items-center  bg-[#f5f1e7]">
      <h1 className=" ease-in-out delay-150 transition-all  text-xl sm:text-3xl font-serif font-extrabold">
        Create an Account
      </h1>
      <div className="mx-auto w-[280px] sm:w-[400px]  ease-in-out delay-150 transition-all rounded-2xl bg-white p-5 ">
        <form className=" mx-auto  space-y-2" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="my-2">
            <label>
              <div className="text-left ml-2 font-serif font-bold">
                <span>Email</span>
              </div>
            </label>
            <input
              placeholder="Email"
              type="email"
              className="border-black px-2 w-full input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <p className="text-red-600 font-serif">
              {errors.email?.type === "required" && errors.email.message}
            </p>
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <div>
            <label>
              <div className="text-left ml-2 font-serif font-bold">
                <span>Password</span>
              </div>
            </label>
            <input
              type="password"
              className="border-black input px-2 w-full"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <p className="text-red-600 font-serif">
              {errors.password?.type === "required" && errors.password.message}
            </p>
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          {errorMessage}

          <input
            className="font-serif font-bold btn"
            type="submit"
            value="Sign Up"
          />
        </form>
        <div className="divider">OR</div>
        <div>
          <button className="btn" onClick={() => signInWithGoogle()}>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;