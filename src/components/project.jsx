import React from "react";
import { Link } from "react-router-dom";

const Project = ({ id, name, img }) => {
    return (
        <div
            className={
                "w-60 h-60 shadow-xl md:hover:shadow-2xl rounded-md my-4 md:hover:scale-[1.2] transition-all delay-300 hover:transition-all hover:delay-300"
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
    );
};

export default Project;
