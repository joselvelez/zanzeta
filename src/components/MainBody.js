import { FrontPage } from "./FrontPage";
import { Post } from "./Post";
import { posts } from "../data/posts";

export const MainBody = () => {
    return (
        <div>
            <div>
                <FrontPage />
            </div>
            <div className="flex justify-center w-full pt-8 pb-2">
                <div className="flex flex-row w-2/3">
                    <div className="w-2/5">
                        <hr className="border-gray-400 mt-3 mx-3" />
                    </div>
                    <div className="flex justify-center w-1/5">
                        <p className="font-sans leading-relaxed text-gray-500">projects</p>
                    </div>
                    <div className="w-2/5">
                        <hr className="border-gray-400 mt-3 mx-3" />
                    </div>
                </div>
            </div>
            <div>
                {posts.map(post => 
                    <Post key={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        demoLink={post.demoLink}
                        date={post.date}
                    />
                )}
            </div>
        </div>
    )
}