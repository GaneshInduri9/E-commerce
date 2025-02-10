import React, { useState } from "react";

const Login = () => {
  const [currState, setCurrState] = useState("Login");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currState === "Login" ? (
          ""
        ) : (
          <input
            required
            type="text"
            className="w-full px-3 border py-2 border-gray-800"
            placeholder="Name"
          />
        )}
        <input
          required
          type="email"
          className="w-full px-3 border py-2 border-gray-800"
          placeholder="Email"
        />

        <input
          required
          type="password"
          className="w-full px-3 border py-2 border-gray-800"
          placeholder="Password"
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currState === "Login" ? (
            <p
              onClick={() => setCurrState("Sign up")}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrState("Login")} className="cursor-pointer">
              Login Here
            </p>
          )}
        </div>

        <button className="bg-black text-sm text-center text-white px-6 py-3">
          {currState === "Login" ? "Sign In" : "Sign up"}
        </button>
      </form>
    </>
  );
};

export default Login;
