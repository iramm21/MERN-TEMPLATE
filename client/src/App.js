import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import Navbar from './components/Navbar';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token');

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
      </Routes>
    </div>
  );
}

export default App;
