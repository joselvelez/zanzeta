import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectDetail from "../../components/ProjectDetail";

const Project = () => {
    const router = useRouter();
    const { projectName } = router.query;
    
    return (
        <div className="container mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-8 bg-white-400">
            <Header />
            <ProjectDetail projectName={projectName} />
            <Footer />
        </div>
    )
}

export default Project;