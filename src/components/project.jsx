import React from "react";
import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
const Project = ({ id, name, img }) => {
    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    // const animation = {
    //     hidden: { x: -200 },
    //     visible: {
    //         x: 0,
    //         transition: {
    //             duration: 0.5,
    //             type: "spring",
    //             bounce: 1,
    //             delay: 0.2,
    //         },
    //     },
    // };

    // useEffect(() => {
    //     if (inView) {
    //         controls.start("visible");
    //     }
    // }, [controls, inView]);
    
    return (
        <div className="md:hover:scale-[1.05] duration-300">
        <div
            className={
                "w-60 h-60 shadow-xl md:hover:shadow-2xl rounded-md my-4 md:hover:scale-[1.1] transition-all duration-300 hover:transition-all hover:duration-300"
            }
        >
            <Link to={`/projects/${id}`}>
                <img
                    src={img}
                    alt={name}
                    className={"w-60 h-44 object-cover rounded-t-md"}
                />
                <div className={"py-4 text-center font-bold"}>{name}</div>
            </Link>
        </div>
        </div>
    );
};

export default Project;
