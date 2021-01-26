import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const onSubmit = () => {
    history.push(`/home`);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="border-2 rounded w-1/3 h-full bg-white mt-20 flex justify-center">
        <form className="flex flex-col gap-y-4 font-poppins text-lg py-40">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border rounded border-gray-300 h-10 w-96 px-3 focus:border-indigo-500 outline-none"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="text"
              placeholder="Password"
              className="border rounded border-gray-300 h-10 w-96 px-3 focus:border-indigo-500 outline-none"
            ></input>
          </div>
          <button
            className="bg-indigo-500 text-indigo-50 rounded h-10 w-96 hover:bg-indigo-700"
            onClick={onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
