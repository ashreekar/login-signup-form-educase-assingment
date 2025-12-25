import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F8F9]">
      <h1 className="text-4xl font-bold text-[#1D2226] mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#6C25FF] text-white rounded-md font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;