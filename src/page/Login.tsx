import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/user.slice";
import type { RootState } from "../state/appStore";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user); // Get registered user from store

  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: LoginForm) => {
    if (user && user.email === data.email && user.password === data.password) {
      dispatch(loginUser({ ...user, fullName: user.fullName, email: user.email }));
      navigate("/you");
    } else {
      // Show popup for 3 seconds
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F8F9]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 pt-10"
      >
        <p className="text-[28px] font-medium text-left w-47.25 leading-tight">
          Sign in to your PopX account
        </p>
        <p className="opacity-60 text-[18px] text-left mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* EMAIL */}
        <div className="flex flex-col relative mt-8">
          <label className="absolute -top-1.75 left-2.25 px-1.25 bg-[#F7F8F9] text-xs text-[#6C25FF]">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className={`w-full h-10 rounded-md pl-4 text-sm outline-none border ${errors.email ? "border-red-500" : "border-[#CBCBCB]"
              }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col relative mt-6">
          <label className="absolute -top-1.75 left-2.25 px-1.25 bg-[#F7F8F9] text-xs text-[#6C25FF]">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full h-10 rounded-md pl-4 text-sm outline-none border ${errors.password ? "border-red-500" : "border-[#CBCBCB]"
              }`}
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          disabled={!isValid}
          className={`h-11 mt-4 text-white rounded-md text-sm font-medium ${!isValid ? "bg-[#CBCBCB] cursor-not-allowed" : "bg-[#6C25FF]"
            }`}
        >
          Login
        </button>
      </form>

      {/* MOBILE POPUP FOR INVALID CREDENTIALS */}
      {showError && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow-md">
          Invalid credentials
        </div>
      )}
    </div>
  );
};

export default Login;