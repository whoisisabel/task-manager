import FormButton from "../../components/Buttons/FormButton";
import PasswordInput from "../../components/Input/PasswordInput";
import TextInput from "../../components/Input/TextInput";

export default function SignUpForm({
  username,
  password,
  loading,
  setUsername,
  setPassword,
  handleSignUp,
  handleView,
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800">Create Account</h2>
      <h3 className="text-sm mt-1 text-gray-800">
        Please enter your details to continue
      </h3>
      <div className="flex flex-col mt-10">
        <TextInput
          id={"emailAddress"}
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
          label={"Sign Up"}
          loading={loading}
          action={handleSignUp}
          disabled={!username || !password}
        />
        <div className="m-5 mr-0 font-semibold text-right">
          <button onClick={() => handleView(0)}>
            <span className="ml-1 text-sm text-cyan-700">Back to login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
