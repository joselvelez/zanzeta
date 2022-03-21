import Image from "next/image";

const Hero = () => {
    return (
        <div className="sm:flex px-4 sm:px-6 justify-between bg-gray-100 rounded-lg py-3">
            <div className="pr-4">
                <p className="font-questrial text-justify text-sm text-slate-700 my-2">
                    Hello, I&#39;m Jose Velez
                </p>
                <p className="font-questrial text-justify text-sm text-slate-700 my-2">
                    I spent 10 years working in the energy industry as a 
                    compliance professional and another 5 or so years working
                     in finance. During that time, I was always thinking about
                      technology and concepts for building web applications.
                       I had avoided learning to write code because it intimidated
                        me and I was unsure of myself, thus shelving many ideas I 
                        had come up with.
                </p>
                <p className="font-questrial text-justify text-sm text-slate-700 my-2">
                    During the COVID pandemic in 2020, I was laid off and I 
                    made the one of the best decisions of my life - I 
                    resolved to learn to code.
                </p>
                <p className="font-questrial text-justify text-sm text-slate-700 my-2">
                    As I continue my new journey, I will be sharing some of 
                    my projects here. The goal is to demonstrate my growth 
                    and competence in building primarily web3 applications.
                </p>
                <p className="font-questrial text-justify text-sm text-slate-700 my-2">
                    I am always looking for opportunities to work with others
                     and collaborate on new or existing projects. Just reach 
                     out and lets talk!
                </p>
            </div>
            <div className="flex-shrink-0 bg-white-300">
                <Image
                    className="rounded-full"
                    src={"/../public/48886275.jpg"}
                    width="250"
                    height="250"
                    alt="Jose L. Velez"
                />
            </div>
        </div>
    )
}

export default Hero;