import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import LoginLogo from "../../components/Logo";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetForm from "./ResetForm";

export default function Login() {
  const { signup, login, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(0);

  const handleLogin = () => {
    login(username, password);
  };

  const handleSignUp = () => {
    signup(username, password);
  };

  const handleReset = () => {
    setTimeout(() => {
      setView(0);
    }, 1000);
  };

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [view]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleAuthView = (view) => {
    switch (view) {
      case 1:
        return (
          <SignUpForm
            username={username}
            password={password}
            loading={loading}
            setUsername={setUsername}
            setPassword={setPassword}
            handleSignUp={handleSignUp}
            handleView={setView}
          />
        );
      case 2:
        return (
          <ResetForm
            username={username}
            loading={loading}
            setUsername={setUsername}
            handleReset={handleReset}
            handleView={setView}
          />
        );

      default:
        return (
          <LoginForm
            username={username}
            password={password}
            loading={loading}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleView={setView}
          />
        );
    }
  };

  return (
    <div className="h-screen">
      <div className="lg:h-screen bg-white lg:bg-cyan-100 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-10 flex flex-col">
          <LoginLogo />
          <div className="h-full hidden lg:flex">
            <img
              src={require("../../assets/background.png")}
              alt="Task Manager"
              className="object-contain"
            />
          </div>
        </div>
        <div className="bg-white p-10 sm:pt-0 lg:p-40">
          {handleAuthView(view)}
        </div>
      </div>
    </div>
  );
}
