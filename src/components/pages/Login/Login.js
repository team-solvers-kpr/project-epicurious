import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  getAuth,
  signOut, 
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../sharedPage/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [signInError, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, 'test@test.com', 'password');
  };
  const logout = () => {
    signOut(auth);
  };

  let errorMessage;

  if (error || googleerror || facebookerror) {
    // toast.error("user not found");
    errorMessage = <span className="text-red-600 font-serif">{error?.message || facebookerror?.message || googleerror?.message}</span>;
  }
  if (loading || googleloading || facebookloading) {
    return <Loading />;
  }
  if (user || googleUser || facebookUser) {
    toast.success("Login successful");
    navigate('/');
  }

  return (
  <>
    <div className=" w-full mx-auto flex flex-col justify-around items-center  bg-[#f5f1e7]">
      <div className="max-w-md mx-auto">
        <div className="pt-10 pb-4">
          <h1 className=" ease-in-out delay-150 transition-all  text-xl sm:text-3xl font-serif font-extrabold">
            Sign in to your account
          </h1>
          <h3 className='pt-4 text-slate-700'>
            Enter your Password to continue.
          </h3>
        </div>
     
        <div className="mx-auto ease-in-out delay-150 transition-all rounded-2xl bg-white p-5 ">
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
              <span className="text-red-600 font-serif">
                {errors.email?.type === "required" && errors.email.message}
              </span>
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
              <span className="text-red-600 font-serif">
                {errors.password?.type === "required" && errors.password.message}
              </span>
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            {/* {console.log(errorMessage)} */}
            { errorMessage }
            <input
              className="font-serif font-bold btn bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600"
              type="submit"
              value="Sign In"
              
            />
          </form>
          <div className="divider">OR</div>
          <div>
            <button className="btn bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600" onClick={() => signInWithGoogle()}>
              Sign In With Google
            </button>
            <button className="btn bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600" onClick={() => signInWithFacebook()}>
              Sign In With Facebook
            </button>
          </div>
        </div>
        <div className=" mt-2 mb-8">
          <a className="underline" href="/signin">Sign in with another account</a>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
