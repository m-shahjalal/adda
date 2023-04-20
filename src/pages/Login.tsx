import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logImage from '../../src/images/group.png';
import { Ilogin } from '../utils/type';

const Login: React.FC = () => {
  const [logData, setLogData] = useState<Ilogin>({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogData({
      ...logData,
      [event.target.name]: event.target.value,
    });
  };
  const { email, password } = logData;

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogData(logData);
    console.log(logData);
    setLogData({
      email: '',
      password: '',
    });
  };

  console.log(logData);

  return (
    <div className="flex flex-wrap h-screen p-3 m-auto">
      <div className="w-4/12 min-h-screen bg-gray-100 p-7">
        <h2 className="mb-3 text-center text-purple-900">Adda with us !!</h2>
        <div className="w-70 h-70 mt-7">
          <img alt="loginpict" src={logImage} />
        </div>
      </div>

      <div className="flex justify-center w-8/12 min-h-screen">
        <div className="flex-col flex-wrap p-5 bg-white rounded-l-md">
          <p className="justify-center mb-1 font-semibold text-center text-md">
            Login
          </p>

          <div className="content-center w-10/12 px-2 py-1 mx-2 mb-3 rounded-md bg-slate-300">
            <form
              onSubmit={(e) => handleLogin(e)}
              className="w-8/12 m-auto mt-4"
            >
              <div className="mb-3">
                <label className="block mb-2 text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="block mb-2 text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="flex flex-wrap content-center mb-3">
                <a href="$#" className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button className="bg-purple-600 block w-full text-white rounded-md border-3 border-slate-300 hover:border-indigo-300 ...  focus:ring-purple-700 ">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="justify-center text-center ">
            <div className="flex justify-center gap-2">
              <button className="p-1 text-xs text-white bg-blue-600 border rounded-md ">
                facebook
              </button>
              <button className="p-1 text-xs text-white bg-red-600 border rounded-md">
                google
              </button>
            </div>
            <p className="font-light text-sx">sign up with social </p>
          </div>

          <div className="text-center">
            <div className="w-72">
              <span className="text-xs font-semibold text-gray-400">
                Don't have account?
              </span>

              <Link
                to="/register"
                className="text-xs font-semibold text-purple-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
