export const FrontPage = () => {
    return (
        <div className="flex bg-gray-100 justify-center">
            <div className="flex flex-row w-2/3 justify-between px-10 py-10">
                <div className="w-2/3 pl-5 pr-14">
                    <p className="pb-2 leading-relaxed font-sans">Hello, I'm <b className="text-gray-700">Jose Velez</b></p>
                    <p className="py-2 leading-relaxed font-sans">
                        I spent 10 years working in the energy industry as a compliance professional and another 5 or so years working in finance. During that time, I was always thinking about technology and concepts for building web applications. I had avoided learning to write code because it intimidated me and I was unsure of myself, thus shelving many ideas I had come up with.
                    </p>
                    <p className="py-2 leading-relaxed font-sans">
                        During the COVID pandemic in 2020, I was laid off and I made the one of the best decisions of my life - I resolved to learn to code.
                    </p>
                    <p className="py-2 leading-relaxed font-sans">
                    As I continue my new journey, I will be sharing some of my projects here. The goal is to demonstrate my growth and competence in building primarily web3 applications. I am always looking for opportunities to work with others and collaborate on new or existing projects. Just reach and lets talk!
                    </p>
                    <p className="py-2 leading-relaxed font-sans">
                        <b className="leading-relaxed font-sans">Current preferred stack</b> |
                            <a href="https://www.javascript.com/" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">javascript</a>
                            <a href="https://soliditylang.org/" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">solidity</a>
                            <a href="https://reactjs.org/" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">react</a>
                            <a href="https://tailwindcss.com/" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">tailwind</a>
                            <a href="https://github.com/ethers-io/ethers.js/" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">ethers.js</a> 
                            <a href="https://ethereum.org" className="px-1 text-yellow-700 hover:text-yellow-500" target="_blank" rel="noreferrer">ethereum</a>
                    </p>
                </div>
                <div className="flex justify-center w-1/3">
                    <img src="/images/48886275.jpg" className="rounded-full" alt="profile" />
                </div>
            </div>
        </div>
    )
}