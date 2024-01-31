import React, { useState } from "react";
import Input from "../Input";
// import Btn from "../Btn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../../AppWrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice"; 

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div className=" h-screen bg-slate-400 flex justify-center items-center">
      <div className="flex flex-col gap-3 bg-gray-300 h-fit pb-8 px-4 pt-5 rounded-md">
        <p className="text-3xl font-bold capitalize">create an account</p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className=" w-full flex flex-col gap-3">
          <Input
            label="Name"
            placeholder="Name"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="password"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <p className=" text-slate-700 flex gap-1">
            Already have an account?
            <Link to="/login" className="text-black underline cursor-pointer">
              Login
            </Link>
          </p>
          <button className="btn btn-outline btn-primary"
          type="submit"
          >SignUp</button>
    
        </form>
      </div>
    </div>
  );
}

export default SignUp;
