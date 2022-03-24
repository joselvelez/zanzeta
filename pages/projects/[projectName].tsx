import { promises as fs } from 'fs';
import path from 'path';
import { useRouter } from "next/router";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectDetail from "../../components/ProjectDetail";
import { ProjectType } from "../../interfaces";

const Project: NextPage = ({ project }: {project: ProjectType}) => {
    const router = useRouter();
    const { projectName } = router.query;
    
    return (
        <div className="container mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-8 bg-white-400">
            <Header />
            <ProjectDetail project={project} />
            <Footer />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const projectsDir = path.join(process.cwd(), 'data/projects.json');
    const projectsFile = fs.readFile(projectsDir);
    const projectsData = JSON.parse((await projectsFile).toString());

    const paths = projectsData.map((item: ProjectType) => {
        return {
            params: {
                projectName: `${item.titleLink}`
            }
        }
    })

    return {
        paths, fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ projectName }) => {
    const projectsDir = path.join(process.cwd(), 'data/projects.json');
    const projectsFile = fs.readFile(projectsDir);
    const projectsData = JSON.parse((await projectsFile).toString());

    return {
        props: {
            project: 'merkleme'
        }
    }
}

export default Project;