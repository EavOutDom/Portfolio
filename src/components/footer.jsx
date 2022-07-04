import React from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMedium,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-[bisque] py-4 w-full text-center duration-500 shadow-xl">
            <div className="w-full flex justify-evenly text-3xl">
                <AiOutlineFacebook />
                <AiOutlineInstagram />
                <AiOutlineLinkedin />
                <AiOutlineMedium />
            </div>
            <p className={""}> &copy; 2022 eavoutdom.com </p>
        </div>
    );
};

export default Footer;
