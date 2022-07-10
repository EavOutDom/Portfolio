import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const Project = ({ id, name, img }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const animation = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                bounce: 1,
            },
        },
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <div className="md:hover:scale-[1.05] duration-300">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animation}
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
            </motion.div>
        </div>
    );
};

export default Project;
