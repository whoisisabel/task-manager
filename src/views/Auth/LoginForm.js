import FormButton from "../../components/Buttons/FormButton";
import PasswordInput from "../../components/Input/PasswordInput";
import TextInput from "../../components/Input/TextInput";

export default function LoginForm({
  username,
  password,
  loading,
  setUsername,
  setPassword,
  handleLogin,
  handleView,
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>
      <h3 className="text-sm mt-1 text-gray-800">Please login to continue</h3>
      <div className="flex flex-col mt-10">
        <div className="mb-5 text-right">
          <span className="text-sm text-gray-800">
            Don't have an account yet?
          </span>
          <button onClick={() => handleView(1)}>
            <span className="ml-1 text-sm text-cyan-700 font-semibold">
              Create One
            </span>
          </button>
        </div>
        <TextInput
          label={"Email Address"}
          placeholder={"Enter your email address"}
          input={username}
          handleInput={setUsername}
          required={true}
          disabled={loading}
        />
        <PasswordInput
          label={"Password"}
          placeholder={"Enter your password"}
          input={password}
          handleInput={setPassword}
          required={true}
          disabled={loading}
        />
        <FormButton
          label={"Login"}
          loading={loading}
          action={handleLogin}
          disabled={!username || !password}
        />
        <div className="m-5 mr-0 font-semibold text-right">
          <button onClick={() => handleView(2)}>
            <span className="ml-1 text-sm text-cyan-700">Forgot Password</span>
          </button>
        </div>
      </div>
    </div>
  );
}
