import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const {SignIn} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SignIn(data.email, data.password)
    .then(res=>console.log(res))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://www.fftcaters.com/blog/wp-content/uploads/2022/01/Business-Catering-Peachtree-City-GA-1536x1024.jpg')] bg-cover">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg bg-opacity-80">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-700 "
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-bold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
            >
              Login
            </button>
            <h1>Do not have an Account? Please <Link to="/register" className="font-bold text-blue-600 ">Register</Link></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
