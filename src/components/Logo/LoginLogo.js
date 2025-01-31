export default function LoginLogo() {
  return (
    <div className="flex">
      <img
        src={require("../../assets/logo.png")}
        alt="Task Manager"
        className="h-8"
      />
      <h1 className="ml-2 text-xl font-bold text-cyan-700"> Task Manager</h1>
    </div>
  );
}
