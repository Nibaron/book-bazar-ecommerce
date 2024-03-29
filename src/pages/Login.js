import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../hooks";

import { toast } from "react-toastify";
import { login } from "../services";


export const Login = () => {
    const email   = useRef();
    const password= useRef();
    useTitle("Login");
    const navigate= useNavigate();

    async function handleLoginSubmit(event){
        event.preventDefault();

        const authDetail={
            email: email.current.value,
            password: password.current.value
        }
        const data = await login(authDetail);
        data.accessToken ? navigate("/products"):toast.error(data);

    }
    async function handleLoginGuest(){
        email.current.value = "nibaron@example.com";
        password.current.value = "12345678";
        try{
          const authDetail = {
            email: email.current.value,
            password: password.current.value
          }
          const data = await login(authDetail);
          data.accessToken ? navigate("/products") : toast.error(data);
        } catch(error){
          toast.error(error.message, {closeButton: false, position: "top-center"});
        }
      }

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    Login
                </p>
            </section>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        ref={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="user@example.com"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        ref={password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </button>
            </form>
            <button onClick={handleLoginGuest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
            <p className="mt-4 text-center text-black dark:text-white">
                Don't have any account?{" "}
                <Link
                    to="/register"
                    className="text-blue-700 hover:underline"
                >
                    Sign Up
                </Link>
                .
            </p>
        </main>
    );
};