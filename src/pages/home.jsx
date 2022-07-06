import React, { useEffect, useState } from "react";
import { link } from "../project-data";

const Home = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const onScroll = () => {
                if (window.scrollY > 0) {
                    setOpacity(0);
                } else {
                    setOpacity(1);
                }
            };
            window.addEventListener("scroll", onScroll);
            return () => {
                window.removeEventListener("scroll", onScroll);
            };
        }
    }, [opacity]);

    return (
        <div className=" w-full text-center">
            <div
                className={
                    "bg-[bisque] h-screen duration-500 flex items-center justify-center"
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
                    <div className="mx-auto w-3/4 text-start">
                        <p className="md:text-lg duration-500 mt-6">
                            A front-end developer with a passion for learning
                            and creating.
                        </p>
                        <p className="md:text-lg duration-500 my-4">
                            Well-organised person with a strong sense of
                            responsibility and a strong desire to learn and
                            grow.
                        </p>
                        <p className="md:text-lg duration-500 mb-6">
                            Interested in the entire frontend spectrum and
                            working on ambitious projects with positive people.
                        </p>
                        <div className="w-3/4 mx-auto duration-500 flex justify-evenly text-3xl">
                            {link.map((data, index) => {
                                return (
                                    <a
                                        style={{ opacity: `${opacity}` }}
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
