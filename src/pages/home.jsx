import React from "react";
import {
    AiOutlineGithub,
    AiOutlineMail,
    AiOutlineLinkedin,
} from "react-icons/ai";

const Home = () => {
    return (
        <div className=" w-full text-center">
            <div
                className={
                    "bg-[bisque] md:h-screen h-80 duration-500 flex items-center justify-center"
                }
            >
                <div>
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
                    <div className={"w-3/12 mx-auto"}>
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
            </div>
            <div>
                <h1
                    className={
                        "uppercase md:text-4xl duration-500 text-xl font-bold text-[#001B3B] mt-8"
                    }
                >
                    skills
                </h1>
                <div
                    className={
                        "mx-auto w-20 h-1 bg-[bisque] duration-500 md:w-36"
                    }
                ></div>
                <h1
                    className={
                        "uppercase md:text-3xl duration-500 text-lg font-bold text-[#001B3B] mt-10 mb-6"
                    }
                >
                    Front-End
                </h1>
                <p className={"my-2"}>
                    ReactJS, Redux Toolkit, HTML, CSS, SCSS, TailwindCSS, Yarn,
                    NPM
                </p>
                <h1
                    className={
                        "uppercase md:text-3xl duration-500 text-lg font-bold text-[#001B3B] mt-10 mb-6"
                    }
                >
                    Languages
                </h1>
                <p className={"mt-2, mb-36"}>JavaScript, Java, C, C++, C#</p>
            </div>
        </div>
    );
};

export default Home;
