import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { SignUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    SignUp(data.email, data.password).then((res) => console.log(res));
  };

  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://www.fftcaters.com/blog/wp-content/uploads/2022/01/Business-Catering-Peachtree-City-GA-1536x1024.jpg')] bg-cover">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg bg-opacity-80">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-bold text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-sm text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>

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
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-bold text-gray-700"
            >
              Profile Picture
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="w-full mt-1"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
            >
              Register
            </button>
            <h1>
              Already have an account? Please{" "}
              <Link to="/login" className="font-bold text-blue-600 ">
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
