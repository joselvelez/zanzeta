import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white-200">
            <nav>
                <ul className="flex">
                    <li className="mr-3">
                        <Link href="/">
                            <a className="font-questrial active:text-black">home</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/projects">
                            <a className="font-questrial text-slate-600 hover:text-black">projects</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/about">
                            <a className="font-questrial text-slate-600 hover:text-black">about</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/contact">
                            <a className="font-questrial text-slate-600 hover:text-black">contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;