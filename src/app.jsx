import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";
import Error from "./pages/error";
import Footer from "./components/footer";
import ProjectDetail from "./pages/project-detail";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="Portfolio/" element={<Home />} />
                <Route path="Portfolio/projects" element={<Projects />} />
                <Route path="Portfolio/experiences" element={<Experiences />} />
                <Route path="Portfolio/projects/:id" element={<ProjectDetail />} />
                <Route path="Portfolio/*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
