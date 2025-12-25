import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-end px-5 pb-10">
      <h1 className="text-[28px] font-medium leading-4.25 text-[#1D2226]">
        Welcome to PopX
      </h1>

      <p className="mt-4 text-[18px] leading-6.5 text-[#1D2226] opacity-60 pr-16">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <Link
        to="/create"
        className="mt-8 h-11.5 bg-[#6C25FF] text-white font-semibold rounded-md
                   flex items-center justify-center"
      >
        Create Account
      </Link>

      <Link
        to="/login"
        className="mt-3 h-11.5 bg-[#6C25FF4B] font-semibold rounded-md
                   flex items-center justify-center"
      >
        Already Registered? Login
      </Link>
    </div>
  );
}

export default WelcomePage;