import React from "react";
import {
    AiOutlineGithub,
    AiOutlineMail,
    AiOutlineLinkedin,
} from "react-icons/ai";

const Home = () => {
    return (
        <div className=" w-full text-center">
            <div className={"bg-[bisque] md:h-[90vh] h-80 duration-500 mt-16 py-28 px-2 md:px-16"}>
                <h1
                    className={
                        "text-[#001B3B] md:text-4xl duration-500 text-xl font-bold"
                    }
                >
                    Hi, My name is Eav Outdom
                </h1>
                <p className="md:text-lg duration-500 my-6">
                    A front-end developer with a passion for learning and
                    creating.
                </p>
                <div className={"w-2/4 mx-auto"}>
                    <div
                        className={
                            "flex justify-evenly md:text-3xl duration-500 text-2xl"
                        }
                    >
                        <AiOutlineGithub />
                        <AiOutlineMail />
                        <AiOutlineLinkedin />
                    </div>
                </div>
            </div>
            <div>
              Hello
            </div>
        </div>
    );
};

export default Home;
