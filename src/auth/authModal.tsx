import React, { useEffect, useState } from "react";

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        onLogin(user); 
        setError(""); 
      } else {
        setError("Неверное имя пользователя или пароль");
      }
    } catch (error) {
      setError("Произошла ошибка при подключении к серверу");
    }
  };

  useEffect(() => {
    console.log("Успешная авторизация.", handleLogin);
  }, [handleLogin]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Авторизация</h2>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 p-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold w-full hover:bg-blue-600 transition duration-200"
      >
        Войти
      </button>

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default Auth;
