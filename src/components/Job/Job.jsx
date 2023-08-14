import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';


const Job = ({job, viewDetails}) => {

    const {title, company, image, type, location, salary} = job;

    return (
        <div className='p-5 border rounded-md'>
            <div>
                <img src={image} alt="" />
            </div>
            <h4 className="mt-5 text-xl">{title}</h4>
            <p className='my-2'>{company}</p>
            <div className='my-5 [&>*]:mr-2 text-blue-500'>
                <small className='p-2 border border-blue-500'>{type[0]}</small><small className='p-2 border border-blue-500'>{type[1]}</small>
            </div>
            <div className='flex items-center [&>*]:mr-1 text-gray-500'>
            <MapPinIcon className="w-6 h-6" /><small>{location}</small><CurrencyDollarIcon className="w-6 h-6" /><small>{salary}</small>
            </div>
            <button className='px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded' onClick={() => viewDetails(job)}>View Details</button>
        </div>
    );
};

export default Job;