import ProjectImage from "./ProjectImage";
import { posts } from "../data/projects";

const ProjectsList = () => {
    return (
        <div className="flex justify-center">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white-400">
                {posts.map((item) => {
                    return (
                        <li key={item.id}>
                            <ProjectImage
                                pid={item.id}
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