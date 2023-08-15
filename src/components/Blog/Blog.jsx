import { useLoaderData } from "react-router-dom";
import vector from "../../../public/assets/images/Vector.png";

const Blog = () => {

    const posts =  useLoaderData();
    console.log(posts);
    
    return (
        <div>
            <div className="bg-blue-50">
                <br /><br />
                <h3 className="ml-5 text-3xl font-bold md:ml-0 md:text-center">Blog</h3>
                <br />
                <img className="w-4/12 mt-10 md:mt-0 md:w-2/12" src={vector} alt="" />
            </div>
            <div className="p-10">
                <h5>Blog Will here ...</h5>
            </div>
        </div>
    );
};

export default Blog;