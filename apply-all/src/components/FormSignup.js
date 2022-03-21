import React, { useState } from 'react';
import validateSignup from './validateInfo/validateSignup';
import useForm from './useForm_signup';
import Alert from './Alert';
const FormSignup = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateSignup
  );
  const list=[]
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alert, setAlert]= useState({show: false, msg: "", type: ""});

  function submitForm() {
    setIsSubmitted(true);
    showAlert(true, "success", "Created account")
  }
  const showAlert = (show= false, type ="", msg="") =>{
    setAlert({show, type, msg} )
  }
  return (
    <div>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit} className='form' noValidate>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    First Name
                  </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.firstname && <p>{errors.firstname}</p>}
                </span>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    Last Name
                  </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.lastname && <p>{errors.lastname}</p>}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    Username
                  </label>
                  <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.username && <p>{errors.username}</p>}
                </span>
              </div>

            </div>
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
              <div className="w-full lg:w-6/12 px-4">
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
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block text-gray-500 text-s mb-2"  >
                    Confirm password
                  </label>
                  <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                  />
                </div>
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-0.5">
                  {errors.password2 && <p>{errors.password2}</p>}
                </span>
              </div>
            </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button type="submit" className="shadow bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                    Sign up
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
              
              <div className='form-input-login'>
                Already have an account? Login here
              </div>            
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;