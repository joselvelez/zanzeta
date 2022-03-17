import Navbar from "./Navbar";

const Header: React.FunctionComponent = () => {
    return (
        <div className="sm:flex justify-between items-center px-4 py-3 bg-white-400">
            <p className="font-questrial text-xl sm:text-3xl">marasovic arhitekti</p>
            <Navbar />
        </div>
    )
}

export default Header;