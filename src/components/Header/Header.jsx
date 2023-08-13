import image from "../../assets/images/P3OLGJ1 copy 1.png";

const Header = () => {
    return (
        <div className="flex items-center gap-5 px-5 pt-5 bg-blue-50">
            <div>
                <h1 className="text-5xl font-bold">One Step<br />Closer To Your<br /><span className="text-blue-500">Dream Job</span></h1>
                <p className="my-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md">Get Started</button>
            </div>
            <div className="w-12/12">
                <img className="w-auto" src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;