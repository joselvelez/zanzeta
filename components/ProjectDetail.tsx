import path from 'path';

const ProjectDetail = ({ project }) => {
    return (
        <div className="md:flex justify-between px-4 sm:px-0">
            <div className="w-full md:w-3/5 bg-white-400">
                {project.images.map(item => {
                    return (
                        <div key={item.id}>
                            <img
                                src={`../${item}`}
                                alt={item.description}
                                className="object-scale-down pb-2"
                            />
                        </div>
                    )
                })}
                {   
                    project.demoVideo === '' ? '' :
                    project.demoVideo.map(item => {
                        return (
                            <div className='aspect-w-16 aspect-h-9 my-4' key={item.id}>
                                <iframe className="w-full aspect-video" src={item}></iframe>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full md:w-2/5 bg-white-300 px-0 py-4 sm:px-4 sm:py-0">
                <p className="pb-2 font-questrial font-bold subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    {project.title}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    {project.date}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-left text-slate-600 tracking-wide">
                    {project.description}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    Built with {project.techStack}.
                </p>
                <div className="flex pb-1 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 hover:text-slate-400">
                    <a href={project.demoLink} rel="noreferrer" target="_blank" className='pr-1'>
                        Demo
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <div className="flex pb-1 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 hover:text-slate-400">
                    <a href={project.github} rel="noreferrer" target="_blank" className='pr-1'>
                        GitHub Repo
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export async function GetStaticProps(context) {
    const { projectName } = context;
    const projectsDir = path.join(process.cwd(), 'data/projects.json');
    const projectsFile = fs.readFileSync(projectsDir);
    const projectsData = JSON.parse((projectsFile).toString());

    const project = projectsData.filter(item => item.titleLink === projectName);

    return {
        props: {
            project: project
        }
    }
}

export default ProjectDetail;