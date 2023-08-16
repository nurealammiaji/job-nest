import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

const AppliedJob = ({job}) => {

    const {job_id, title, image, company, type, location, salary} = job;

    return (
        <div className="items-center gap-5 p-5 border rounded-md md:flex">
            <div className="flex items-center h-40 p-10 bg-gray-100 rounded-md">
                <img className="w-40" src={image} alt="" />
            </div>
            <div className="grow">
                <h4 className="mt-5 text-xl md:mt-0">{title}</h4>
                <p className='my-2'>{company}</p>
                <div className='my-5 [&>*]:mr-2 text-blue-500'>
                    <small className='p-2 border border-blue-500'>{type[0]}</small>
                    <small className='p-2 border border-blue-500'>{type[1]}</small>
                </div>
                <div className='flex items-center [&>*]:mr-1 text-gray-500'>
                <MapPinIcon className="w-6 h-6" /><small>{location}</small>
                <CurrencyDollarIcon className="w-6 h-6" /><small>{salary}</small>
                </div>
            </div>
            <div>
                <Link to={`/job/${job_id}`}><button className='px-4 py-2 mt-4 mt-5 text-sm font-semibold text-white bg-blue-500 rounded md:mt-0'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJob;