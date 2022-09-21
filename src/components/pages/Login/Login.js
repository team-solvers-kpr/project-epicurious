import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithApple, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai';
// import Footer from "../../sharedPage/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // sign in with apple 
  const [ signInWithApple ] = useSignInWithApple(auth);

  // sign in with google
  
  const [ signInWithGoogle ] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Welcome back Emperor of The See: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="h-screen  mx-auto flex items-center justify-center bg-[#f5f1e7]">
      <div className="max-w-md mx-auto">
          <div className='pt-10 pb-4'>
            <h1 className='text-3xl font-bold font-serif'>Sign in to your account</h1>
            <h3 className='pt-4 text-slate-700'>Enter your Password to continue.</h3>
          </div>
        <div className=" flex flex-col lg:min-w-[500px]">
        <div className="px-8 py-4 bg-white">
          {" "}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div className="input-group flex justify-between border  h-12  ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className=" h-full px-2 w-4/5"
            />
            <button className="border-0 bg-white">Edit</button>
          </div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex justify-between border  h-12  ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className=" h-full px-2 w-4/5"
            />
            <button className="border-0 bg-white">Show</button>
          </div>
            <button 
              onClick={() => signInWithEmailAndPassword(email, password)} 
              className=' bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600'
            >
              Sign In
            </button>

            <div className="divider">OR</div>

            <div>

            {/* // sign in with google */}

              <button 
                  onClick={() => signInWithGoogle(email, password)}
                  className=' bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600'
                >
                <span><FcGoogle /></span> 
                <span>Sign In With Google</span> 
              </button>

              {/* // sign in with apple */}

              <button 
                  onClick={() => signInWithApple(email, password)}
                   className=' bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600'
                >
                <span><AiFillApple /></span> 
                <span>Sign In With Apple</span>
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Login;