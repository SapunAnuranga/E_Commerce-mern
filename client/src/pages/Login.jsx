import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      <form onSubmit={onSubmitHandler} className='w-full flex flex-col gap-4'>
        {currentState === 'Login' ? null : (
          <input
            type='text'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Name'
          />
        )}
        <input
          type='email'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Email'
        />
        <input
          type='password'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Password'
        />

        <div className='w-full flex justify-between text-sm -mt-2'>
          <p className='cursor-pointer'>Forget Your Password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className='cursor-pointer'
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className='cursor-pointer'
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type='submit'
          className='bg-black text-white font-light px-4 py-2 mt-4 self-center'
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
