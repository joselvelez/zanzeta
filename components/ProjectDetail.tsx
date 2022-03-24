import { fs } from 'fs'
import path from 'path';
import Image from "next/image";
import ReactPlayer from 'react-player';

const ProjectDetail = ({ projectName }) => {
    const projectsDir = path.join(process.cwd(), 'data/projects.json');
    const projectsFile = fs.readFileSync(projectsDir);
    const projectsData = JSON.parse((projectsFile).toString());

    const project = projectsData.filter(item => item.titleLink === projectName);

    return (
        <div className="md:flex justify-between px-4 sm:px-0">
            <div className="w-full md:w-3/5 bg-yellow-400">
                <Image
                    src={`/../public/${project[0].images[0]}`}
                    width={750}
                    height={500}
                    alt={project[0].description}
                    className="rounded-xl"
                />
                <div className='bg-red-300'>
                    <div className="sm:w-full">
                        {project[0].demoVideo ? 
                            <ReactPlayer url={project[0].demoVideo} width='100%' height='100%' />
                            : ''
                        }
                    </div>
                    <div>
                        sup
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5 bg-white-300 px-0 py-4 sm:px-4 sm:py-0">
                <p className="pb-2 font-questrial font-bold subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    {project[0].title}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    {project[0].date}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-left text-slate-600 tracking-wide">
                    {project[0].description}
                </p>
                <p className="pb-2 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 tracking-wide">
                    Built with {project[0].techStack}.
                </p>
                <div className="flex pb-1 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 hover:text-slate-400">
                    <a href={project[0].demoLink} rel="noreferrer" target="_blank" className='pr-1'>
                        Demo
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <div className="flex pb-1 font-questrial font-normal subpixel-antialiased text-sm text-slate-600 hover:text-slate-400">
                    <a href={project[0].github} rel="noreferrer" target="_blank" className='pr-1'>
                        GitHub Repo
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <div className="font-questrial font-normal subpixel-antialiased text-sm text-slate-600 hover:text-slate-500 tracking-wide">
                    {project[0].summary}
                </div>
            </div>
        </div>
    )
}

export async function GetStaticProps(context) {
    return {
        props: {
            
        }
    }
}

export default ProjectDetail;