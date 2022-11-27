import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../sharedPage/Loading';


export default function Signin() {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
  const email = data.email;
  const password = '1234';
    signInWithEmailAndPassword(email, password);
    // navigate('/login');
    
    
  };
  // const errorMessage = 'auth/wrong-password';
  const erroruser = 'auth/user-not-found';
  // console.log(errorMessage);
  if (error !== erroruser) {
    // toast.error("user not found");
    // return <span className="text-red-600 font-serif">{error.message}</span>;
    // navigate('/login');
    navigate('/signup');

    console.log(error);
  }

  if (loading) {
    return <Loading />;
  }
  // if (!user) {
  //   navigate('/signup');
  // }
  return (
    <div className="bg-[#F5F1E7] h-screen mt-16">
      <div className="max-w-md mx-auto">
        <div className="pt-10 pb-4">
          <h1 className="text-3xl font-bold font-serif">
            Sign in to your account
          </h1>
          <h3 className="pt-4 text-slate-700">
            Enter your email address to continue.
          </h3>
        </div>
        <div className="bg-white m-5 h-52  rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className=" font-bold pt-8 pb-1 text-start pl-10 text-xs">
              Email
            </p>
            <label>
              <input
                placeholder="Enter your Email"
                type="email"
                className="border-black px-2 w-4/5 input"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              {/* {console.log(errors)} */}
            </label>
            <input
              className="font-serif font-bold btn bg-slate-700 h-12 text-center text-white uppercase mt-6 w-4/5 rounded active:bg-rose-600"
              type="submit"
              value="next"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
