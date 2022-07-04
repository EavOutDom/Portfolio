import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        if (width > 700) {
            setShow(false);
        }
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [setWidth, width]);

    useEffect(() => {
        setShow(false);
    }, [location]);

    return (
        <div className={"w-full fixed top-0 left-0"}>
            <div className=" bg-[bisque] py-6 px-2 md:px-6 duration-500 flex justify-between items-center shadow-xl">
                <Link to="/">
                    <h1
                        className={
                            "md:text-2xl text-xl duration-500 font-semibold"
                        }
                    >
                        Eav Outdom
                    </h1>
                </Link>
                <div
                    className={
                        show
                            ? "uppercase md:flex duration-500 md:items-center md:static absolute top-16 left-0 mr-1 w-full bg-[bisque] pb-4 text-sm shadow-xl"
                            : "md:flex items-center md:visible hidden uppercase duration-500"
                    }
                >
                    <Link to={"/"}>
                        <h3>Home</h3>
                    </Link>
                    <Link to={"/projects"}>
                        <h3>Projects</h3>
                    </Link>
                    <Link to={"/experiences"}>
                        <h3>Experiences</h3>
                    </Link>
                </div>
                <div
                    className="md:hidden"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <button>{show ? <ImCross /> : <FaBars />}</button>
                </div>
            </div>
            {/* {show && nav} */}
        </div>
    );
};

export default Navbar;