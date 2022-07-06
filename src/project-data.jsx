import pr1 from "./assets/pr1.png";
import pr2 from "./assets/pr2.png";
import pr3 from "./assets/pr3.png";
import pr4 from "./assets/pr4.png";
import pr5 from "./assets/pr5.png";
import pr6 from "./assets/pr6.png";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMedium,
    AiOutlineGithub,
} from "react-icons/ai";

export const projectData = [
    {
        name: "Movie",
        img: pr1,
        skills: "ReactJS, Redux-Toolkit, SCSS",
        urlGit: "https://github.com/EavOutDom/Redux-Toolkit-Movie",
        urlPre: "https://eavoutdom.github.io/Redux-Toolkit-Movie/",
    },
    {
        name: "Grocery",
        img: pr2,
        skills: "ReactJS, Redux-Toolkit, TailwindCSS",
        urlGit: "https://github.com/EavOutDom/Grocery-Bud",
        urlPre: "https://eavoutdom.github.io/Grocery-Bud/",
    },
    {
        name: "Todo",
        img: pr3,
        skills: "ReactJS, Redux-Toolkit, Redux-Persist, TailwindCSS",
        urlGit: "https://github.com/EavOutDom/Todo",
        urlPre: "https://eavoutdom.github.io/Todo/",
    },
    {
        name: "Cart",
        img: pr4,
        skills: "ReactJS, Redux-Toolkit, TailwindCSS",
        urlGit: "https://github.com/EavOutDom/Cart",
        urlPre: "https://eavoutdom.github.io/Cart/",
    },
    {
        name: "Cocktails",
        img: pr5,
        skills: "ReactJS, Redux-Toolkit, TailwindCSS",
        urlGit: "https://github.com/EavOutDom/Cocktails",
        urlPre: "https://eavoutdom.github.io/Cocktails/",
    },
    {
        name: "Color Generator",
        img: pr6,
        skills: "ReactJS, TailwindCSS",
        urlGit: "https://github.com/EavOutDom/Color-Generator",
        urlPre: "https://eavoutdom.github.io/Color-Generator/",
    },
];

export const link = [
    {
        icon: <AiOutlineFacebook />,
        url: "https://www.facebook.com/mizter.dom",
    },
    {
        icon: <AiOutlineInstagram />,
        url: "https://www.instagram.com/eav_out_dom",
    },
    {
        icon: <AiOutlineLinkedin />,
        url: "https://www.linkedin.com/in/eav-outdom-2b8496210/",
    },
    {
        icon: <AiOutlineMedium />,
        url: "https://medium.com/@eavoutdom400",
    },
    {
        icon: <AiOutlineGithub />,
        url: "https://github.com/EavOutDom",
    },
];
