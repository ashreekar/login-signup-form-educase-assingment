import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../state/user.slice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  watch("email");
  watch("phone");


  const onSubmit = (data: FormData) => {
    dispatch(
      registerUser({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        agency: data.agency,
        password: data.password
      })
    );
    navigate("/you");
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
            {
              label: "Full Name*",
              name: "fullName",
              type: "text",
              rules: { required: "Full name is required" },
            },
            {
              label: "Phone number*",
              name: "phone",
              type: "text",
              rules: {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone",
                },
              },
            },
            {
              label: "Email address*",
              name: "email",
              type: "email",
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              },
            },
            {
              label: "Password*",
              name: "password",
              type: "password",
              rules: {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              },
            },
            {
              label: "Company name",
              name: "company",
              type: "text",
              rules: {},
            },
          ].map((field) => {
            const error = errors[field.name as keyof FormData];

            return (
              <div key={field.name} className="relative">
                <label className="absolute -top-1.75 left-2.25 px-1.25 bg-[#F7F8F9] text-xs text-[#6C25FF]">
                  {field.label}
                </label>

                <input
                  {...register(field.name as keyof FormData, field.rules)}
                  type={field.type}
                  placeholder={field.label.replace("*", "")}
                  className={`w-full h-9.5 border rounded-md pl-3.5 text-sm outline-none
                    ${error
                      ? "border-red-500"
                      : "border-[#CBCBCB]"
                    }`}
                />

                {error && (
                  <p className="text-xs text-red-500 mt-1">
                    {error.message}
                  </p>
                )}
              </div>
            );
          })}

          {/* AGENCY */}
          <div className="mt-2">
            <p className="text-xs text-[#1D2226]">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="mt-1.5 flex gap-5">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="yes"
                  {...register("agency", { required: "Please select Yes or No" })}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" value="no" {...register("agency")} />
                No
              </label>
            </div>

            {errors.agency && (
              <p className="text-xs text-red-500 mt-1">
                {errors.agency.message}
              </p>
            )}
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