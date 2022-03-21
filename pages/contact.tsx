import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects: NextPage = () => {
    return(
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8 max-w-7xl">
            <Header />
            <Footer />
        </div>
    )
}

export default Projects;