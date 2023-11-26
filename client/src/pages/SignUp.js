import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    axios
      .get('http://localhost:3001/users')
      .then((res) => {
      console.log(res.data)
    })
  }

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/register', { email, username, password })
      .then(() => {
        alert('User registered successfully!')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers()
        navigate('/login')
      })
    .catch((error) => {
      console.log('Unable to register user.')
    })
  }

  return (
    <div
      className="flex w-full h-screen">
      <div
        className="w-full md:w-1/2 h-full bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg max-w-sm md:max-w-md lg:max-w-lg p-9 mx-auto"
          onSubmit={handleRegister}>
          <label>Username</label>
          <br
          />
          <input
            type="text"
            className="w-full h-10 rounded-xl bg-zinc-700 p-2 my-2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br
          />
          <label>Email</label>
          <br
          />
          <input
            type="email"
            className="w-full h-10 rounded-xl bg-zinc-700 p-2 my-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br
          />
          <label>Password</label>
          <br
          />
          <input
            type="password"
            className="w-full h-10 rounded-xl bg-zinc-700 p-2 my-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br
          />
          <button
            className="w-1/2 h-12 border hover:bg-teal-900 rounded-lg"
            type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div
        className="w-full md:w-1/2 h-full flex justify-center items-center bg-teal-800">
        <h2
          className="text-4xl text-white font-semibold">
          Sign Up
        </h2>
      </div>
    </div>
  );
}

export default SignUp;
