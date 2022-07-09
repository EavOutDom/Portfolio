import React from "react";
import { Link } from "react-router-dom";
const Project = ({ id, name, img }) => {
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
