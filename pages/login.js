/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Link from "next/link";
import { account } from "../appwrite/appwrite";
import { useRouter } from "next/router";

function login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const login = (e) => {
    e.preventDefault();

    const promise = account.createEmailSession(user.email, user.password);

    promise.then(
      function (response) {
        // console.log(response)
        router.push("/room");
      },
      function (error) {
        console.log(error);
      },
    );
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='shadow-3xl rounded pb-2.5'>
        <div className='h-20 flex justify-center rounded-t-xl items-center bg-rose-600'>
          <p
            tabIndex={0}
            role='heading'
            aria-level='1'
            aria-label='Login to your account'
            className=' text-white text-4xl font-extrabold leading-6'>
            Login
          </p>
        </div>
        <div className='bg-white flex flex-col justify-around rounded-b-xl gap-5 shadow-3xl lg:w-full md:w-1/2 w-full p-10'>
          <div className='flex flex-col mx-2.5'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              Email
            </label>
            <input
              required
              role='input'
              type='email'
              aria-label='enter email address'
              className='bg-gray-200 peer border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <p class='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
              Please provide a valid email address.
            </p>
          </div>
          <div className='flex flex-col mx-2.5'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              Password
            </label>
            <input
              aria-label='enter your password'
              role='input'
              type='password'
              className='bg-gray-200 peer border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              required
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <p class='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
            Please provide the correct password.
          </p>
          <div className='flex flex-col justify-center items-center mx-2.5 text-rose-600'>
            <button
              className='h-10 w-full bg-rose-600 focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 hover:opacity-80 text-white rounded-xl cursor-pointer'
              onClick={login}>
              Login
            </button>
            <Link className='links' href='/signup cursor-pointer'>
              Create an Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
