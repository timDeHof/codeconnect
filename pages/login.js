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
    <div className='cont'>
      <div className='main-cont login'>
        <div className='form-title'>Login</div>
        <div className='fields'>
          <p>Email</p>
          <input
            type='email'
            placeholder='Enter your email'
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className='fields'>
          <p>Password</p>
          <input
            placeholder='Enter your password'
            required
            type='password'
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className='footer'>
          <button className='submit-btn' onClick={login}>
            Login
          </button>
          <Link className='links' href='/signup'>
            Create an Account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default login;
