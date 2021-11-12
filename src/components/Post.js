import { posts } from '../data/posts';

export const Post = () => {
    return (
        <div className="flex justify-center w-full py-8">
            <div className="flex flex-row w-2/3 relative">
                <div className="w-1/2">
                    <img src={posts[0].image} alt="ts"/>
                </div>
                <div className="w-1/2">
                    {/* blank half */}
                </div>
                <div className="bg-gray-100 opacity-90 p-8 rounded shadow-xl absolute top-32 right-0 w-2/3">
                    <p className="pb-2"><b className="text-gray-700 font-bold">{posts[0].title}</b></p>
                    <p className="leading-relaxed font-sans pb-2">
                        {posts[0].description}
                    </p>
                    <a href={posts[0].demoLink} className="text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">Live Demo</a>
                    <div className="flex flex-row justify-between pt-4">
                        <div>
                            <p className="text-gray-600 leading-relaxed font-sans">{posts[0].date}</p>
                        </div>
                        <div>
                            <a href={posts[0].demoLink} className="text-yellow-700 hover:text-yellow-500">
                                Read more...
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}