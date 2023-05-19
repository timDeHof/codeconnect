import React, { useState } from "react";
import Link from "next/link";
import { account } from "../appwrite/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/router";

export default function Signup() {
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
    <div className='cont'>
      <div className='signup'>
        <div className='signup-form'>SignUp</div>
        <div className='fields'>
          <p>User Name</p>
          <input
            required
            type='text'
            placeholder='Enter your name'
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div className='fields'>
          <p>Email</p>
          <input
            required
            type='email'
            placeholder='Enter your email'
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div className='fields'>
          <p>Password</p>
          <input
            required
            placeholder='Enter your password'
            type='password'
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div className='footer'>
          <button className='signup-btn' onClick={signup}>
            SignUp
          </button>
          <Link href='/login' className='links'>
            Have an Account!
          </Link>
        </div>
      </div>
    </div>
  );
}
