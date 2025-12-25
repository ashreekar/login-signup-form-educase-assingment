import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  company?: string;
  agency: string;
};

function CreateAccount() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/profile");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen flex flex-col justify-between bg-[#F7F8F9]"
    >
      <div className="px-5">
        {/* HEADER */}
        <h1 className="mt-7 w-50 text-2xl leading-7 font-medium text-[#1D2226]">
          Create your PopX account
        </h1>

        {/* FORM */}
        <div className="mt-5 flex flex-col gap-4.5">
          {[
            { label: "Full Name*", name: "fullName", type: "text" },
            { label: "Phone number*", name: "phone", type: "text" },
            { label: "Email address*", name: "email", type: "email" },
            { label: "Password*", name: "password", type: "password" },
            { label: "Company name", name: "company", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <label className="absolute -top-1.75 left-2.25 px-1.25 bg-[#F7F8F9] text-xs text-[#6C25FF]">
                {field.label}
              </label>
              <input
                {...register(field.name as keyof FormData)}
                type={field.type}
                placeholder={field.label.replace("*", "")}
                className="w-full h-9.5 border border-[#CBCBCB] rounded-md pl-3.5 text-sm"
              />
            </div>
          ))}

          {/* AGENCY */}
          <div className="mt-2">
            <p className="text-xs text-[#1D2226]">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="mt-1.5 flex gap-5">
              <label className="flex items-center gap-2 text-sm">
                <input {...register("agency")} type="radio" value="yes" />
                Yes
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input {...register("agency")} type="radio" value="no" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="mx-5 mb-5 h-11 bg-[#6C25FF] rounded-md text-white text-sm font-semibold"
      >
        Create Account
      </button>
    </form>
  );
}

export default CreateAccount;