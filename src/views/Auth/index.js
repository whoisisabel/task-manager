import React, { useState } from "react";
import LoginLogo from "../../components/Logo/LoginLogo";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetForm from "./ResetForm";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const payload = {
      username: username,
      password: password,
    };

    console.log("Login Payload:", payload);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleSignUp = () => {
    setLoading(true);
    const payload = {
      username: username,
      password: password,
    };

    console.log("SignUp Payload:", payload);
    setTimeout(() => {
      setLoading(false);
      setView(0);
    }, 1000);
  };

  const handleReset = () => {
    setLoading(true);
    const payload = {
      username: username,
    };

    console.log("Reset Payload:", payload);
    setTimeout(() => {
      setLoading(false);
      setView(0);
    }, 1000);
  };

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
        <div className="bg-white p-10 sm:pt-0 lg:p-40">{handleAuthView(view)}</div>
      </div>
    </div>
  );
}
