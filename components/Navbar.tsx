import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white-200">
            <nav>
                <ul className="flex">
                    <li className="mr-3">
                        <Link href="/projects">
                            <a className="font-questrial text-slate-900 hover:text-slate-600">projects</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/contact">
                            <a className="font-questrial text-slate-900 hover:text-slate-600">contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;