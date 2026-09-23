
// import React, { useState } from 'react';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <form 
//       onSubmit={onSubmitHandler} 
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl text-gray-700">
//           {currentState === 'Login' ? 'Login' : 'Sign Up'}
//         </p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>

//       <p className="text-gray-500 text-sm -mt-3 mb-2">
//         {currentState === 'Login' 
//           ? 'Welcome back! Please enter your details.' 
//           : 'Create an account to start shopping.'}
//       </p>

//       {currentState === 'Sign Up' && (
//         <input 
//           type="text" 
//           className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
//           placeholder="Full Name" 
//           required 
//         />
//       )}

//       <input 
//         type="email" 
//         className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
//         placeholder="Email Address" 
//         required 
//       />

//       <input 
//         type="password" 
//         className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black" 
//         placeholder="Password" 
//         required 
//       />

//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <p className="cursor-pointer hover:underline text-gray-600">
//           Forgot your password?
//         </p>
//         {currentState === 'Login' ? (
//           <p 
//             onClick={() => setCurrentState('Sign Up')} 
//             className="cursor-pointer font-medium hover:underline"
//           >
//             Create account
//           </p>
//         ) : (
//           <p 
//             onClick={() => setCurrentState('Login')} 
//             className="cursor-pointer font-medium hover:underline"
//           >
//             Login Here
//           </p>
//         )}
//       </div>

//       <button 
//         type="submit" 
//         className="bg-black text-white font-light px-8 py-2.5 mt-4 w-full active:bg-gray-700 transition-colors"
//       >
//         {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//       </button>
//     </form>
//   );
// };

// export default Login;
import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setError('');
    setMessage('');
    setLoading(true);

    try {
      // Decide which backend API to call
      const endpoint =
        currentState === 'Login'
          ? 'https://summer-training-project-8hv1.onrender.com/api/login'
          : 'https://summer-training-project-8hv1.onrender.com/api/signup';

      // Data sent to backend
      const body =
        currentState === 'Login'
          ? {
              email,
              password,
            }
          : {
              name,
              email,
              password,
            };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      // Backend returned an error
      if (!response.ok) {
        setError(data.message || 'Something went wrong');
        return;
      }

      // Successful signup
      if (currentState === 'Sign Up') {
        setMessage('Account created successfully! Please login.');

        // Switch to Login
        setCurrentState('Login');

        // Clear password
        setPassword('');
      }

      // Successful login
      else {
        setMessage('Login successful!');

        console.log('Logged in user:', data.user);

        // You can redirect to Home here later
        // Example:
        // navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);

      setError(
      
        `Connection error: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const switchState = () => {
    setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login');

    // Clear previous messages
    setError('');
    setMessage('');
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      {/* Heading */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl text-gray-700">
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </p>

        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm -mt-3 mb-2">
        {currentState === 'Login'
          ? 'Welcome back! Please enter your details.'
          : 'Create an account to start shopping.'}
      </p>

      {/* Full Name - only for Sign Up */}
      {currentState === 'Sign Up' && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="Full Name"
          required
        />
      )}

      {/* Email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="Email Address"
        required
      />

      {/* Password */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="Password"
        required
      />

      {/* Forgot password / Switch */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === 'Login' ? (
          <p className="cursor-pointer hover:underline text-gray-600">
            Forgot your password?
          </p>
        ) : (
          <span></span>
        )}

        {currentState === 'Login' ? (
          <p
            onClick={switchState}
            className="cursor-pointer font-medium hover:underline"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={switchState}
            className="cursor-pointer font-medium hover:underline"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="w-full text-red-500 text-sm text-left">
          {error}
        </p>
      )}

      {/* Success message */}
      {message && (
        <p className="w-full text-green-600 text-sm text-left">
          {message}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white font-light px-8 py-2.5 mt-4 w-full active:bg-gray-700 transition-colors disabled:opacity-60"
      >
        {loading
          ? 'Please wait...'
          : currentState === 'Login'
          ? 'Sign In'
          : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
