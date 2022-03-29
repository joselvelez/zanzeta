import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import ProjectDetail from "../../components/ProjectDetail";
import { ProjectType } from "../../interfaces";
import { projects } from "../../data/projects";

const Project: NextPage = ({ project }: {project: ProjectType}) => {    
    return (
        <div>
            <ProjectDetail project={project} />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projects.map((item: ProjectType) => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log(params);    
    const project = projects.filter(item => item.titleLink === params.projectName)

    return {
        props: {
            project: project[0]
        }
    }
}

export default Project;