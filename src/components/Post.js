export const Post = ({ image, title, description, demoLink, date }) => {
    return (
        <div className="flex justify-center items-center w-full py-4 mt-2">
            <div className="md:flex md:flex-row w-2/3 md:relative">
                <div className="sm:w-full md:w-2/3 mb-6">
                    <img src={image} alt="project" className=""/>
                </div>
                <div className="bg-white opacity-90 sm:p-3 md:p-4 lg:p-6 rounded md:shadow-lg lg:shadow-xl sm:w-full md:w-2/3 md:absolute md:right-0 md:top-12 lg:right-0 lg:top-32">
                    <div className="px-10">
                        <p className="pb-2"><b className="text-gray-700 font-bold text-sm">{title}</b></p>
                        <p className="leading-relaxed font-sans pb-2 text-sm">
                            {description}
                        </p>
                        <div className="flex flex-row justify-between pt-4">
                            <div>
                                <p className="text-gray-600 leading-relaxed font-sans text-sm">{date}</p>
                            </div>
                            <div>
                                <a href={demoLink} className="text-yellow-700 hover:text-yellow-500 text-sm" target="_blank" rel="noreferrer">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}