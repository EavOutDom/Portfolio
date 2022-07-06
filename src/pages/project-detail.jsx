import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../project-data";
import { AiOutlineGithub } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";

const ProjectDetail = () => {
    const { id } = useParams();
    const proDetail = projectData[id];
    return (
        <div className="mb-80">
            <h1
                className={
                    "mt-32 text-center font-semibold md:text-3xl text-xl duration-500"
                }
            >
                {proDetail.name}
            </h1>
            <div
                className={
                    "h-1 mx-auto w-28 bg-[bisque] md:w-32 my-1 duration-500"
                }
            ></div>
            <div className="mb-44 mt-32 px-2 md:px-8">
                <div className="w-9/12 md:h-96 flex justify-center mx-auto shadow-2xl">
                    <img
                        src={proDetail.img}
                        alt={"proDetail.name"}
                        className={"object-cover"}
                    />
                </div>
                <h1 className="text-center font-semibold my-8 md:my-16">
                    <span className={'font-bold text-lg'}>SKILLS:{" "}</span>{proDetail.skills}
                </h1>
                <div className="flex w-20 mx-auto text-3xl justify-between">
                    <a
                        href={proDetail.urlPre}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <VscOpenPreview />
                    </a>
                    <a
                        href={proDetail.urlGit}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <AiOutlineGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
