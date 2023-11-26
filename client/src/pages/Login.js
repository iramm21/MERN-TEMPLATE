import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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

  const handleLogin = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    const token = response.data.token;
    alert('User logged in successfully!');
    setUsername('');
    setPassword('');
    await fetchUsers();
    localStorage.setItem('token', token);
    navigate('/account');
  } catch (error) {
    console.log('Unable to login.');
  }
};

  return (
    <div
      className="flex w-full h-screen">
      <div
        className="w-full md:w-1/2 h-full bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg max-w-sm md:max-w-md lg:max-w-lg p-9 mx-auto"
          onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
      </div>
      <div
        className="w-full md:w-1/2 h-full flex justify-center items-center bg-teal-800">
        <h2
          className="text-4xl text-white font-semibold">
          Login
        </h2>
      </div>
    </div>
  )
}

export default Login