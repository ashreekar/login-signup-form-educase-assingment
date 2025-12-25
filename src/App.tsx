import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex justify-center bg-purple-50">
      <div className="w-full max-w-93.75 bg-[#F7F8F9] border-4 border-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

export default App;