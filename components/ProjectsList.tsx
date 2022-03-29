import ProjectImage from "./ProjectImage";
import { ProjectType } from "../interfaces";

const ProjectsList = ({ projects }:{projects: ProjectType[]}) => {
    
    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-white-400" role="list">
                {projects.map((item:ProjectType) => {
                    return (
                        <li key={item.id}>
                            <ProjectImage
                                imageURI={item.images[0]}
                                description={item.description}
                                titleLink={item.titleLink}
                            />
                        </li>
                    )
                })}  
            </ul>
        </div>
    )
}

export default ProjectsList;