import Link from "next/link";
import Navbar from "./Navbar";

const Header: React.FunctionComponent = () => {
    return (
        <div className="sm:flex justify-between items-center px-4 sm:px-0 py-4 bg-white-400">
            <p className="font-questrial font-medium subpixel-antialiased text-xl sm:text-3xl">
                <Link href="/">
                    <a className="border-0">jose lionel velez</a>
                </Link>
            </p>
            <Navbar />
        </div>
    )
}

export default Header;