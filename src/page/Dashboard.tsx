import { useSelector } from "react-redux";
import type { User } from "../state/user.slice";
import type { RootState } from "../state/appStore";
import { Camera } from "lucide-react"; // Lucide icon

const Dashboard = () => {
  const user: User | null = useSelector((state: RootState) => state.user.user);

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col">
      {/* Header */}
      <div className="h-17 w-full bg-white shadow-[0_3px_6px_#00000007] flex items-center px-3.75 pt-6 pb-4">
        <span className="text-[#1D2226] text-[18px] leading-5.25 capitalize">
          Account Settings
        </span>
      </div>

      {/* Profile Section */}
      <div className="border-b border-dashed border-[#CBCBCB] px-5 pt-6">
        <div className="relative flex items-start">
          {/* Image Container */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-19 h-19 rounded-full"
            />
            <Camera
              size={23}
              className="absolute right-1 bottom-1 text-[#6C25FF] bg-white rounded-full p-1 shadow-md"
            />
          </div>

          {/* Name & Email */}
          <div className="flex flex-col pl-4 pt-1">
            <span className="text-[#1D2226] font-medium text-[15px] capitalize">
              {user?.fullName || "John Doe"}
            </span>
            <span className="text-[#1D2226] text-[14px] capitalize">
              {user?.email || "john@example.com"}
            </span>
          </div>
        </div>

        <div className="mt-2 min-w-[84.25] text-[#1D2226] text-[14px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;