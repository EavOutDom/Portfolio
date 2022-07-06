import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div
            className={
                "w-full h-screen flex flex-col justify-center text-center items-center px-2"
            }
        >
            <h1 className={"text-8xl font-bold my-2"}>404</h1>
            <h1 className={"text-lg font-semibold my-2"}>page not found</h1>
            <h1 className={"my-2"}>
                Maybe the URL is incorrect, or the page no longer exist.
            </h1>
            <Link to={"/Portfolio/"}>
                <button
                    className={"my-2 border-2 border-black p-4 bg-[bisque]"}
                >
                    RETURN TO HOME PAGE
                </button>
            </Link>
        </div>
    );
};

export default Error;
