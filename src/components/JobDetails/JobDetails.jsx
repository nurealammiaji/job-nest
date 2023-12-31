import { MapPinIcon, CurrencyDollarIcon, EnvelopeIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { Link, useLoaderData } from "react-router-dom";
import vector from "../../../public/assets/images/Vector.png"
import { addToDb } from "../../fakedb";

const JobDetails = () => {

    const job = useLoaderData();

    const {job_id, title, description, educational_requirements, requirements, experience, salary, contact, location} = job;

    const applyNow = (id) => {
        addToDb(id);
        console.log(id);
    }

    return (
        <div>
            <div className="bg-blue-50">
                <br /><br />
                <h3 className="ml-5 text-3xl font-bold md:ml-0 md:text-center">Job Details</h3>
                <br />
                <img className="w-4/12 mt-10 md:mt-0 md:w-2/12" src={vector} alt="" />
            </div>
            <div className="p-10 md:flex md:gap-5">
                <div>
                    <p><span className="font-semibold">Job Description:</span> {description}</p>
                    <br />
                    <p><span className="font-semibold">Requirements:</span> {requirements}</p>
                    <br />
                    <p><span className="font-semibold">Educational Requirement:</span></p>
                    <p>{educational_requirements}</p>
                    <br />
                    <p><span className="font-semibold">Experience:</span></p>
                    <p>{experience}</p>
                </div>
                <div className="w-auto mt-10 md:w-8/12 md:mt-0">
                    <div className="p-5 rounded-md bg-blue-50">
                        <h3 className="text-xl font-semibold">Job Details</h3>
                        <hr className="mt-2 mb-4" />
                        <div className='flex items-center'>
                            <CurrencyDollarIcon className="w-6 h-6 mr-2 text-blue-500" />
                            <p><span className="font-semibold">Salary:</span> {salary}</p>
                        </div>
                        <div className='flex items-center mt-1'>
                            <BriefcaseIcon className="w-6 h-6 mr-2 text-blue-500" />
                            <p><span className="font-semibold">Job Title:</span> {title}</p>
                        </div>
                        <br />
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <hr className="mt-2 mb-4" />
                        <div className='flex items-center'>
                            <PhoneIcon className="w-6 h-6 mr-2 text-blue-500" />
                            <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
                        </div>
                        <div className='flex items-center mt-1'>
                            <EnvelopeIcon className="w-6 h-6 mr-2 text-blue-500" />
                            <p><span className="font-semibold">Email:</span> {contact.email}</p>
                        </div>
                        <div className='flex items-center mt-1'>
                            <MapPinIcon className="w-6 h-6 mr-2 text-blue-500" />
                            <p><span className="font-semibold">Address:</span> {location}</p>
                        </div>
                    </div>
                    <br />
                    <div className="font-semibold text-center text-white bg-blue-500 rounded-md"><a href="/applied-jobs"><button className="px-24 py-2 md:px-28" onClick={() => applyNow(job_id)}>Apply Now</button></a></div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;