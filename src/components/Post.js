export const Post = ({ image, title, description, demoLink, date }) => {
    return (
        <div className="flex justify-center w-full py-8">
            <div className="flex flex-row w-2/3 relative">
                <div className="w-1/2">
                    <img src={image} alt="ts"/>
                </div>
                <div className="w-1/2">
                    {/* blank half */}
                </div>
                <div className="bg-white opacity-90 p-8 rounded shadow-xl absolute top-32 right-0 w-2/3">
                    <div className="px-10">
                        <p className="pb-2"><b className="text-gray-700 font-bold">{title}</b></p>
                        <p className="leading-relaxed font-sans pb-2">
                            {description}
                        </p>
                        <div className="flex flex-row justify-between pt-4">
                            <div>
                                <p className="text-gray-600 leading-relaxed font-sans">{date}</p>
                            </div>
                            <div>
                                <a href={demoLink} className="text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}