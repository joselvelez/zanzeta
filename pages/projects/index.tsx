import { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsList from "../../components/ProjectsList";

const Projects: NextPage = () => {
    return(
        <div className="container mx-auto sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <Header />
            <ProjectsList />
            <Footer />
        </div>
    )
}

export default Projects;