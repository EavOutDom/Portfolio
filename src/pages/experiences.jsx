import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";

const Experiences = () => {
    return (
        <div>
            <h1
                className={
                    "mt-32 text-center font-semibold md:text-3xl text-xl duration-500"
                }
            >
                Experiences
            </h1>
            <div
                className={
                    "h-1 mx-auto w-32 bg-[bisque] md:w-40 my-1 duration-500"
                }
            ></div>
            <div className="experience mb-44 mt-32 px-2 md:px-8 z-[1]">
                <VerticalTimeline lineColor="#001B3B" animate>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2014 - 2019"
                        iconStyle={{ background: "bisque", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">
                            Somdach Krom Prah Mohaleap High school
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold">
                            Kompong Cham, Cambodia
                        </h4>
                        <p>Graduated Baccalaureate degree</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - present"
                        iconStyle={{ background: "bisque", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">
                            Royal University of Phnom Penh
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold">
                            Phnom Penh, Cambodia
                        </h4>
                        <p>Studying Computer Science of year 3</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March - May 2022"
                        iconStyle={{ background: "#001B3B", color: "#fff" }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">
                            Front-End Developer Internship - Qoosi Cambodia
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold">
                            Phnom Penh, Cambodia
                        </h4>
                        <p>
                            Developed using React JS, SCSS to enhance
                            functionality and user experience on web page
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experiences;
