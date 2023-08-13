import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between p-5 bg-blue-50">
            <div>
                <Link to="/"><h3 className="text-4xl italic font-bold"><span className="text-blue-500">J</span>ob<span className="text-blue-500">N</span>est</h3></Link>
            </div>
            <div className="[&>*]:mx-2 [&>*:hover]:text-blue-500">
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied-jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md">Start Applying</button>
            </div>
        </nav>
    );
};

export default NavBar;