import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className=" w-full h-screen flex sm:flex-row flex-col justify-center items-center">
        <div className="hidden  w-1/2 h-full bg-[#fde9e9] lg:flex flex-col justify-center items-center ">
          <img className="hidden lg:block" src="./designer banner.png" alt="" />
          <h1 className="hidden lg:block font-sans font-semibold text-6xl text-[#080608]">
            Hey Team,
          </h1>
        </div>

        <div className="w-full lg:w-1/2  h-full bg-[#f6f6fb] flex flex-col justify-center items-center space-y-10">
          <p className="font-sans text-xl lg:text-2xl text-[#ed1c24]">
            Welcome to Zeal Design Studio
          </p>
          <img src="./logo.png" alt="logo" />

          <div className="flex flex-row items-center space-x-4 bg-white px-16 lg:px-20 py-4 rounded-lg">
            <img src="./google.png" alt="google icon" />
            <p className="text-xl text-[#ed1c24]">Sing in with Google</p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="w-36 h-[2px] bg-[#080608]"></div>
            <p className="text-[#080608]">Or</p>
            <div className="w-36 h-[2px] bg-[#080608]"></div>
          </div>

          <div className="flex flex-col space-y-8 justify-center items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 border-[#080608] rounded-md w-80 lg:w-96 h-16 bg-transparent p-4 text-[#080608]"
            />
            <input
              type="password"
              placeholder="password"
              className="border-2 border-[#080608] rounded-md w-80 lg:w-96 h-16 bg-transparent p-4 text-[#080608]"
            />

            <button className="bg-[#ed1c24] w-80 lg:w-96 h-16 rounded-md text-white text-xl">
              LOGIN
            </button>

            <a className="text-[#080608]" href="">
              Forgot Password?
            </a>
          </div>

          <div>
            <p className="font-sans text-lg text-[#ed1c24]">
              2024-2034 Zeal Creation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
