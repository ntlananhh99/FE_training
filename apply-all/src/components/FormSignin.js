
import React, { useState } from 'react';
import validateSignin from './validateInfo/validateSignin';
import useForm from './useForm_signin';

const FormSignin = ({login}) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateSignin
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function submitForm(){
    setIsSubmitted(true)
   const data={
     email: values.email,
     password: values.password
   }
   const token= login(data)
   console.log(token)
  }
  
  return (
    <div>
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit} className='form' noValidate>
          
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    Email
                  </label>
                  <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.email && <p>{errors.email}</p>}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    Password
                  </label>
                  <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.password && <p>{errors.password}</p>}
                </span>
              </div>
              
            </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button type="submit" className="shadow bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                    Sign in
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
              
                         
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignin;