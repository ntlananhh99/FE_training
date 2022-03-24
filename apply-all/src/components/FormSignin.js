
import React from 'react';
import validateSignin from './validateInfo/validateSignin';
import useForm from './useForm_signin';
import login from '../callAPI'
import { Link, useNavigate } from 'react-router-dom';

const FormSignin = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateSignin
  );
  let navigate= useNavigate()

   async function submitForm(){
    const payload={
      email: values.email,
      password: values.password
    }
    await login(payload)
    .then (result => { return result})
    .then (result => {localStorage.setItem("accessToken", result.token)})
    .catch (err => console.log(err))

    navigate("/", {});
  }
  const showPassword = () => {
    let passwordType = document.getElementById("myInput");
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    if (passwordType.type === "password") {
        passwordType.type = "text";
        hide.classList.remove("hidden");
        show.classList.add("hidden");
    } else {
        passwordType.type = "password";
        hide.classList.add("hidden");
        show.classList.remove("hidden");
    }
}
  
  return (
    <div>
       <div className="bg-indigo-50">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded xl:w-2/4 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                        <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-600 body-font">Dont have account? <Link to="/signin" className="text-blue-600 hover:text-blue-400"> Sign up here</Link></p>
                        <button aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-5 hover:bg-gray-100">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>


                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        <form onSubmit={handleSubmit} className='form' noValidate>

                            <div>
                                <label for="email" className="text-sm font-medium leading-none text-gray-800"> Email </label>
                                <input aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-blueGray-200 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="john@gmail.com "
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                />
                            </div>
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.email && <p>{errors.email}</p>}
                 </span>
                            <div className="mt-6 w-full">
                                <label for="myInput" className="text-sm font-medium leading-none text-gray-800"> Password </label>
                                <div className="relative flex items-center justify-center">
                                    <input type="password" className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                     name="password"
                                                      value={values.password}
                                                    onChange={handleChange}
                                     />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer" onClick={showPassword}>
                                        <div id="show">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg5.svg" alt="eye" />
                                        </div>
                                        <div id="hide" className="hidden">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg6.svg" alt="eye" />
                                        </div>
                                    </div>
                                </div>
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                 {errors.password && <p>{errors.password}</p>}
              </span>
                            </div>
                            <div className="mt-6 w-full">
                                <button className="flex mx-auto whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Sign in</button>
                            </div>
                        </form>
                    </div>

                    <div className="xl:w-2/4 md:w-1/2 ml-8 md:mt-0 mt-6">
                        <img src={require('../img/log-in.jpg')} alt="login img" />

                    </div>
                </div>
            </div>

    </div>
  );
};

export default FormSignin;