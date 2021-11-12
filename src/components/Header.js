export const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row justify-between w-2/3 px-5 py-5">
                <div>
                    <h2 className="leading-relaxed font-sans font-bold text-3xl text-gray-700">Jose Lionel Velez</h2>
                </div>
                <div className="flex flex-row items-center">
                    <a href="https://twitter.com/JoseLionelVelez" target="_blank" rel="noreferrer">
                        <img src='/images/iconmonstr-twitter-1-24.png' className="px-2 hover:opacity-50 cursor-pointer" alt="twitter logo" />
                    </a>
                    <a href="https://github.com/joselvelez" target="_blank" rel="noreferrer">
                        <img src='/images/iconmonstr-github-1-24.png' className="px-2 hover:opacity-50 cursor-pointer" alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/joselvelez/" target="_blank" rel="noreferrer">
                        <img src='/images/iconmonstr-linkedin-1-24.png' className="px-2 hover:opacity-50 cursor-pointer" alt="linkedin logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}