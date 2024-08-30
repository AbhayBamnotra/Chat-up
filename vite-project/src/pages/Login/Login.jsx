import React, { useState } from 'react';
import assests from '../../assets/assets';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="flex items-center gap-60 justify-center min-h-screen bg-[url(/background.png)]">
        <img className='' src={assests.logo_big} alt="" />
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-sm w-full">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 py-4 text-center">
          <h2 className="text-white text-3xl font-semibold">{currState}</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {currState === "Sign up" ?  <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>:null}
             {currState === "Sign up" ?
             <input
             type="text"
             name="username"
             value={formData.username}
             onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
             placeholder="Enter User name"
             required
           />:null} 
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4 flex items-center">
             
              {
                currState === "Sign up" ?
                <><input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="form-checkbox text-indigo-500 focus:ring-indigo-400"
                    required /><span className="ml-2 text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-indigo-500 hover:underline">
                        terms of use
                      </a>{' '}
                      &{' '}
                      <a href="#" className="text-indigo-500 hover:underline">
                        privacy policy
                      </a>.
                    </span></>:null

              }

            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Login
            </button>

          
            {
              currState === "Sign up" ? 
              <p className="mt-4 text-center text-gray-600">
                Already have an account?{' '}
                <a onClick={() => setCurrState("login")} href="#" className="text-indigo-500 hover:underline">
                  Login here
                </a>
              </p> : 
                <p className="mt-4 text-center text-gray-600">
                Don’t have an account?{' '}
                <a onClick={() => setCurrState("Sign up")} href="#" className="text-indigo-500 hover:underline">
                  Sign up here
                </a>
              </p>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
