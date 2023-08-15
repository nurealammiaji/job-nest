import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="md:flex [&>*]:mb-8 md:mb-0 items-center justify-between p-5 bg-blue-50">
            <div>
                <Link to="/"><h3 className="text-4xl italic font-bold"><span className="text-blue-500">J</span>ob<span className="text-blue-500">N</span>est</h3></Link>
            </div>
            <div className="[&>*]:mx-2 [&>*]:mt-3 md:[&>*]:mt-0 [&>*:hover]:text-blue-500 flex flex-col md:flex-row">
                <NavLink className={({isActive}) => isActive ? 'text-blue-500' : '' } to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-blue-500' : ''} to="/statistics">Statistics</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-blue-500' : ''} to="/applied-jobs">Applied Jobs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-blue-500' : '' } to="/blog">Blog</NavLink>
            </div>
            <div>
                <button className="px-4 py-3 font-semibold text-white bg-blue-500 rounded-md">Start Applying</button>
            </div>
        </nav>
    );
};

export default NavBar;