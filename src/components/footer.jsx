import React from "react";
import { link } from "../project-data";

const Footer = () => {
    return (
        <div className="bg-yellow-400 py-4 w-full text-center duration-500 shadow-xl">
            <div
                className={
                    "grid grid-cols-2 items-start text-start px-2 md:px-6 sm:w-9/12 mx-auto duration-500"
                }
            >
                <div>
                    <h1>eavoutdom400@gmail.com</h1>
                    <h1>+855 99 789 551</h1>
                </div>
                <div className="w-full sm:w-3/4 mx-auto duration-500 flex sm:justify-evenly justify-end text-3xl">
                    {link.map((data, index) => {
                        return (
                            <a
                                key={index}
                                href={data.url}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                {data.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
            <p className={"my-2 font-semibold text-sm"}> &copy; 2022 EAVOUTDOM </p>
        </div>
    );
};

export default Footer;
