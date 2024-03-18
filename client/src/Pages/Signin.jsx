import { Alert, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../Redux/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../Components/OAuth";
export default function Signin() {
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const [FormData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const API_URL = "http://localhost:5050/api/v1/auth/sign-in";

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FormData.username || !FormData.email || !FormData.password)
      return dispatch(signInFailure("All Fields Required..."));
    // return setErrorMessage("All Fields Required ...");

    try {
      // setIsLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData),
      });

      const data = await res.json();
      if (data.success === false) return dispatch(signInFailure(data.message));
      // return setErrorMessage(data.message);

      // setIsLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setIsLoading(false);
      dispatch(signInFailure(error.message));
    }
  };
  // console.log(FormData);
  return (
    <div className=" min-h-screen mt-20">
      <div className=" flex flex-col gap-10 max-w-3xl p-4 mx-auto  md:items-center md:flex-row">
        {/* Left-side Content */}
        <div className=" flex-1">
          <p className=" text-sm text-justify flex-1">
            <span className=" capitalize text-2xl font-semibold">Focus</span> is
            a powerful mental tool that enables us to channel our attention and
            energy toward specific tasks or goals.
          </p>
        </div>

        {/* Right-side Content */}
        <div className=" flex-1">
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Humphrey's Blog
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="username"
                        name="username"
                        id="username"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        autoComplete="of"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="username"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Username
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        autoComplete="of"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        email
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                        autoComplete="of"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        password
                      </label>
                    </div>
                    <div className=" flex gap-5">
                      <Button
                        type="submit"
                        gradientDuoTone="purpleToPink"
                        disabled={loading}
                        // className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {loading ? (
                          <>
                            <Spinner size={"sm"}>
                              <span className="">Submitting...</span>
                            </Spinner>
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    
                      <OAuth />
                    </div>

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account?{" "}
                      <Link
                        to={"/sign-up"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign Up Here
                      </Link>
                    </p>
                  </form>
                  {errorMessage && (
                    <Alert className=" mt-5" color={"failure"}>
                      {errorMessage}
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
