import { NextPage, GetStaticProps } from "next";
import ProjectsList from "../../components/ProjectsList";
import { ProjectType } from "../../interfaces";
import { projects } from '../../data/projects.js';

const Projects: NextPage = ({ projects }: {projects: ProjectType[]}) => {
    return(
        <div>
            <ProjectsList projects={projects} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {    
    return {props: {
        projects: projects
        }
    }
}

export default Projects;