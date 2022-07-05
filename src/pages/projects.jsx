import React from "react";
import Project from "../components/project";
import { projectData } from "../project-data";
const Projects = () => {
    return (
        <div className="mt-20 mb-44">
            <h1 className="mt-32 text-center font-semibold md:text-3xl text-xl duration-500">
                Personal Projects
            </h1>
            <div
                className={
                    "h-1 mx-auto w-40 bg-[bisque] md:w-56 my-1 duration-500"
                }
            ></div>
            <div className="sm:grid sm:grid-cols-2 sm:w-[75vw] lg:w-[50vw] duration-500 grid-flow-row mx-auto justify-items-center items-center gap-2 px-2 flex justify-center flex-col my-20">
                {projectData.map((data, index) => {
                    return (
                        <Project
                            key={index}
                            id={index}
                            name={data.name}
                            img={data.img}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
