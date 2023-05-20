import React, { useState } from "react";
import Link from "next/link";
import { account } from "../appwrite/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/router";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const signup = (e) => {
    e.preventDefault();

    const promise = account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    );

    promise.then(
      function (response) {
        // console.log(response)
        router.push("/login");
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
            aria-label='Signup for an account'
            className=' text-white text-4xl font-extrabold leading-6'>
            SignUp
          </p>
        </div>
        <div className='bg-white flex flex-col justify-around rounded-b-xl shadow-3xl lg:w-full md:w-1/2 w-full p-10'>
          <div className='flex flex-col mx-2.5'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              User Name
            </label>
            <input
              required
              role='input'
              type='text'
              aria-label='Enter your username'
              className='bg-gray-200 peer border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
            <p class='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
              Please provide a valid username.
            </p>
          </div>
          <div className='flex flex-col m-2.5'>
            <label className='text-sm font-medium leading-none text-gray-800'>
              Email
            </label>
            <input
              required
              role='input'
              type='email'
              aria-label='enter email address'
              className='bg-gray-200 peer border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
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
              required
              role='email'
              type='password'
              aria-label='Enter your password'
              className='bg-gray-200 peer border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <p class='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
              Please provide a password of more than 8 characters.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center mt-2.5'>
            <button
              className='h-10 w-full focus:ring-2 focus:ring-offset-1 focus:ring-rose-400 hover:opacity-80 bg-rose-600 text-white rounded-xl cursor-pointer'
              onClick={signup}>
              SignUp
            </button>
            <Link href='/login' className='my-2.5 text-rose-600'>
              Have an Account!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
