
import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form 
      onSubmit={onSubmitHandler} 
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl text-gray-700">
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <p className="text-gray-500 text-sm -mt-3 mb-2">
        {currentState === 'Login' 
          ? 'Welcome back! Please enter your details.' 
          : 'Create an account to start shopping.'}
      </p>

      {currentState === 'Sign Up' && (
        <input 
          type="text" 
          className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
          placeholder="Full Name" 
          required 
        />
      )}

      <input 
        type="email" 
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
        placeholder="Email Address" 
        required 
      />

      <input 
        type="password" 
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
        placeholder="Password" 
        required 
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:underline text-gray-600">
          Forgot your password?
        </p>
        {currentState === 'Login' ? (
          <p 
            onClick={() => setCurrentState('Sign Up')} 
            className="cursor-pointer font-medium hover:underline"
          >
            Create account
          </p>
        ) : (
          <p 
            onClick={() => setCurrentState('Login')} 
            className="cursor-pointer font-medium hover:underline"
          >
            Login Here
          </p>
        )}
      </div>

      <button 
        type="submit" 
        className="bg-black text-white font-light px-8 py-2.5 mt-4 w-full active:bg-gray-700 transition-colors"
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;