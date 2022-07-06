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

    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState(null);

        useEffect(() => {
            let lastScrollY = window.pageYOffset;

            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset;
                const direction = scrollY > lastScrollY ? "down" : "up";
                if (
                    direction !== scrollDirection &&
                    (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
                ) {
                    setScrollDirection(direction);
                }
                lastScrollY = scrollY > 0 ? scrollY : 0;
            };
            window.addEventListener("scroll", updateScrollDirection); // add event listener
            return () => {
                window.removeEventListener("scroll", updateScrollDirection); // clean up
            };
        }, [scrollDirection]);

        return scrollDirection;
    }

    const scrollDirection = useScrollDirection();

    return (
        <div
            className={`w-full sticky ${
                scrollDirection === "down" ? "-top-52" : "top-0"
            } left-0 z-[2] transition-all duration-500`}
        >
            <div className=" bg-yellow-400 h-24 px-2 md:px-16 duration-500 flex justify-between items-center shadow-xl">
                <Link to="Portfolio/">
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
                            ? "uppercase md:flex transition-all duration-500 md:items-center md:static absolute top-16 left-0 mr-1 w-full bg-yellow-400 pb-4 text-sm shadow-xl"
                            : "md:flex items-center md:visible hidden uppercase duration-500"
                    }
                >
                    <Link to={"Portfolio/"}>
                        <h3>Home</h3>
                    </Link>
                    <Link to={"Portfolio/projects"}>
                        <h3>Projects</h3>
                    </Link>
                    <Link to={"Portfolio/experiences"}>
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
        </div>
    );
};

export default Navbar;
