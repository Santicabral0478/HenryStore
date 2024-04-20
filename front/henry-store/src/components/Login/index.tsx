import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { backurl } from "@/app/BACK_URL";
import { IUserData, AuthFormProps } from "./types";

export const AuthForm: React.FC<AuthFormProps>  = ({ token, setToken }) => {

  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    const name = event.target.name; 
    const value = event.target.value;

    const updateUserData= {
      ...userData, [name]: value
    }
    
    setUserData(updateUserData);
  }
  
  // validacion de datos

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateInput = (inputName: string ,inputValue: string) =>{
    switch (inputName) {
      case "email": { return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue));}
      case "password": { return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(inputValue));}
    }
  }

  const submitHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const newErrors: { email?: string; password?: string } = {};
    
    if(userData.email == ""     ) newErrors.email = "📧 Email is required" 
      else if ((validateInput   ("email", userData.email) == false)) newErrors.email = "📧 Invalid email format";
    if(userData.password == ""  ) newErrors.password = "🔑 Password is required" 
      else if((validateInput    ("password" ,userData.password)) == false) newErrors.password = "🔑 Invalid password"; 
      
    setErrors(newErrors);

    if (Object.keys(errors).length > 0){
      return;
    }  

    try {
      const response = await fetch(`${backurl.apiurl}/users/login`, {
        method: "POST",
        headers: {
          'ngrok-skip-browser-warning': 'true',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      } 

      const json = await response.json();
      setToken(json.token);
      localStorage.setItem("userToken", json.token);

      window.location.href = '/';

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 w-80">
          <form onSubmit={submitHandler} className="max-w-md mx-auto">
            <div>
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

            </div>
            <div>
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

            </div>
            <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">
              Log in
            </button>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link href={`/register`}>                
                  <span className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">New Here?</span>
                </Link>
                <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
              </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AuthForm;
