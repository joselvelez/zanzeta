import { promises as fs } from 'fs';
import path from 'path';
import { NextPage, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsList from "../../components/ProjectsList";
import { ProjectType } from "../../interfaces";

const Projects: NextPage = ({ projects }: {projects: ProjectType[]}) => {
    return(
        <div className="container mx-auto sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <Header />
            <ProjectsList projects={projects} />
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const projectsDir = path.join(process.cwd(), 'data/projects.json');
    const projectsFile = await fs.readFile(projectsDir);
    const projectsData = JSON.parse(projectsFile.toString());

    const projects = projectsData.map(item => {
        return item;
    })
    
    return {
        props: {
            projects: await Promise.all(projects)
        }
    }
}

export default Projects;