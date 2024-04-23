import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { backurl } from "@/app/BACK_URL";
import { UserData } from "./types";

export const RegisterForm = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string; address?: string; phone?: string}>({});

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    const value = event.target.value;

    const updateUserData = {
      ...userData,
      [name]: value
    };

    setUserData(updateUserData);
  };

  const validateInput = (inputName: string, inputValue: string): boolean => {
    switch (inputName) {
      case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
      case "password": return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(inputValue);
      case "name": return /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+(?:['\s][A-Za-záéíóúÁÉÍÓÚüÜñÑ]+)*\s[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+(?:['\s][A-Za-záéíóúÁÉÍÓÚüÜñÑ]+)*$/.test(inputValue);
      case "address": return /^[A-Za-z0-9\s,'-]*$/.test(inputValue);
      case "phone": return /^\d+$/.test(inputValue);
      default: return false;
    }
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const newErrors: { email?: string; password?: string; name?: string; address?: string; phone?: string} = {};

  if(userData.email == ""   ) newErrors.email = "📧 Email is required" 
    else if ((validateInput ("email", userData.email)) == false) newErrors.email = "📧 Invalid email format";
  if(userData.password == "") newErrors.password = "🔑 Password is required" 
    else if((validateInput  ("password" ,userData.password)) == false) newErrors.password = "🔑 Password must include at least one number, one lowercase, one uppercase letter, and be at least 8 characters long";
  if(userData.name == ""    ) newErrors.name = "👤 Name is required" 
    else if((validateInput  ("name" ,userData.name)) == false) newErrors.name = "👤 Invalid name";
  if(userData.address == "" ) newErrors.address = "🏠 Adress is required" 
    // else if((validateInput  ("adress" ,userData.address)) == false) newErrors.address = "🏠 Invalid adress";
  if(userData.phone == ""   ) newErrors.phone = "📞 Phone is required" 
    else if((validateInput  ("phone" ,userData.phone)) == false) newErrors.phone = "📞 Invalid phone";
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch(`${backurl.apiurl}/users/register`, {
        method: "POST",
        headers: {
          'ngrok-skip-browser-warning': 'true',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error);
    }
      window.location.href = `/login`;
  };

  return (
    <div style={{maxWidth: "30rem"}}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 ">
          <form onSubmit={submitHandler} className="max-w-md mx-auto">
            <div className="mt-5">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={userData.email}
                name="email"
                type="text"
                onChange={inputHandler}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={userData.password}
                name="password"
                type="password"
                onChange={inputHandler}
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={userData.name}
                name="name"
                type="text"
                onChange={inputHandler}
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Address</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={userData.address}
                name="address"
                type="text"
                onChange={inputHandler}
                placeholder="Address"
              />
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Phone</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={userData.phone}
                name="phone"
                type="text"
                onChange={inputHandler}
                placeholder="Phone"
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
            <div className="text-right mb-4">
              <a className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="mt-5">
              <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">
                Register
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link href={`/login`}>                
                <span className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">Login</span>
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
