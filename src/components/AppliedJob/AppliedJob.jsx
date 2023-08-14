import { Link } from "react-router-dom";

const AppliedJob = ({job}) => {

    const {job_id, title, image, company, type, location, salary} = job;

    console.log(job);

    return (
        <div className="items-center gap-5 p-5 border rounded-md md:flex">
            <div className="flex items-center h-40 p-10 bg-gray-100 rounded-md">
                <img className="w-40" src={image} alt="" />
            </div>
            <div className="grow">
                <h4 className="text-xl">{title}</h4>
                <p>{company}</p>
                <div>
                    <small>{type}</small>
                </div>
                <div>
                    <small>{location}</small>
                    <small>{salary}</small>
                </div>
            </div>
            <div>
                <Link to={`/job/${job_id}`}><button className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md">View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJob;