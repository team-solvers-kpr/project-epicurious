import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// import Footer from "../../sharedPage/Footer";
import Loading from "../../sharedPage/Loading";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading/>
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="h-screen  mx-auto flex items-center justify-center bg-[#f5f1e7]">
      <div className="  flex flex-col lg:min-w-[500px]">
        <div className="px-8 py-4 bg-white">
          {" "}
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <div class="input-group flex justify-between border  h-12  ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type here"
              className=" h-full px-2 w-full"
            />
            <span className="border-0 bg-white">Edit</span>
          </div>
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <div class="flex justify-between border  h-12  ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
              className=" h-full px-2 w-full"
            />
            <span className="border-0 bg-white">Edit</span>
          </div>
          <button
            onClick={() => createUserWithEmailAndPassword(email, password)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
