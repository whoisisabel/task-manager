import FormButton from "../../components/Buttons/FormButton";
import TextInput from "../../components/Input/TextInput";

export default function ResetForm({
  username,
  loading,
  setUsername,
  handleReset,
  handleView,
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800">Forgot Password</h2>
      <h3 className="text-sm mt-1 text-gray-800">
        Please enter your registered email and instructions will be sent to you
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
        <FormButton
          label={"Submit"}
          loading={loading}
          action={handleReset}
          disabled={!username}
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
