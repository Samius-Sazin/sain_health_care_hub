import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../Context/useAuth';

function Register() {
  const { setUser, setError, signInUsingGoogle } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const handleLoginButton = () => {
    signInUsingGoogle()
      .then(res => {
        setUser(res.user);
        navigate(location?.state?.from?.pathname || '/home');
      })
      .catch(error => {
        setError(error);
      });
  }

  return (
    <div className='flex justify-center'>
      <div className='shadow-lg px-10 py-5 rounded-lg'>
        <form className='mt-5'>
          <label className='font-semibold text-lg text-[#4e9a02]' htmlFor="email">Email:</label><br />
          <input className='rounded-lg font-medium w-full' type='email' placeholder='Enter email' /> <br />
          <label className='font-semibold text-lg text-[#4e9a02]' htmlFor="password">Password:</label><br />
          <input className='rounded-lg font-medium w-full' type='password' placeholder='Enter password' /> <br />
          <input className='cursor-pointer py-2 px-7 bg-[#4e9a02] rounded-lg mt-2 hover:bg-[#63ac19] font-semibold text-white' type='submit' value="Submit" /> <br />
        </form>

        <div className='flex items-center justify-center mt-5'>
          <p className='font-semibold text-lg me-5'>or, </p>
          <button onClick={ handleLoginButton } className='py-2 px-8 bg-[#4e9a02] rounded-lg mt-2 hover:bg-[#63ac19] font-semibold text-white'>Login with google</button>
        </div>
      </div>
    </div>
  )
}

export default Register;
