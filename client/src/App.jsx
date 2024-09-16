import { useState } from 'react';
import Navbar from './Component/Navbar';
import Register from './Component/Register';
import LoginForm from './Component/Login';
import './App.css';

function App() {
  const [isRegisterable, setIsRegisterable] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleRegister = () => {
    setIsRegisterable(prevState => !prevState);
    // Hide login form if showing register
    if (isLogin) setIsLogin(false);
  };

  const toggleLogin = () => {
    setIsLogin(prevState => !prevState);
    // Hide register form if showing login
    if (isRegisterable) setIsRegisterable(false);
  };

  return (
    <>
      <Navbar onToggleRegister={toggleRegister} onToggleLogin={toggleLogin} />
      {isRegisterable && <Register onLoginClick={toggleLogin} />}
      {isLogin && <LoginForm onToggleRegister={toggleRegister} />}
    </>
  );
}

export default App;
