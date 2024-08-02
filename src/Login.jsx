// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from './assets/img1.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate login error for demo
    if (username !== 'user@example.com' || password !== 'password123') {
      toast.error('Incorrect email or password.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Handle successful login here
      console.log('Logged in successfully');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-slate-600 rounded-md shadow-lg backdrop-filter backdrop-blur-sm relative grid grid-cols-2 max-w-4xl h-full">
        <div className="h-full">
          <img
            className="rounded-tl-md rounded-bl-md object-cover h-full"
            src={img1}
            alt="Login Visual"
          />
        </div>
        <div className="bg-white border-white rounded-tr-md rounded-br-md p-6 shadow-lg backdrop-filter backdrop-blur-sm relative h-full flex flex-col justify-center">
          <h1 className="text-2xl text-black font-bold text-center mb-2">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative my-2 mb-6 mt-4">
              <input
                type="email"
                className="peer block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
              >
                Your Email
              </label>
              <BiUser className="absolute top-4 right-4 text-gray-500" />
            </div>
            <div className="relative my-2 mb-6">
              <input
                type="password"
                className="peer block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-4 right-4 text-gray-500" />
            </div>
            <div className="flex justify-end items-center mb-8 mt-4">
              <Link to="/forgot-password" className="text-emerald-500">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="bottom: 0 w-full text-[18px] rounded-full bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
