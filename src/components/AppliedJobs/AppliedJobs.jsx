import { useLoaderData } from "react-router-dom";
import AppliedJob from '../AppliedJob/AppliedJob';
import vector from "../../../public/assets/images/Vector.png";
import { useEffect, useState } from "react";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [filteredJobs, setFilteredJobs ] = useState([]);

    const onSiteFinder = () => {
        const onsiteJobs = jobs.filter(job => job.type[0] === "Onsite");
        setFilteredJobs(onsiteJobs);
    }

    const remoteFinder = () => {
        const remoteJobs = jobs.filter(job => job.type[0] === "Remote");
        setFilteredJobs(remoteJobs);
    }

    useEffect (() => {
        setFilteredJobs(jobs);
    }, [jobs])

    return (
        <div>
            <div className="bg-blue-50">
                <br /><br />
                <h3 className="ml-5 text-3xl font-bold md:ml-0 md:text-center">Applied Jobs</h3>
                <br />
                <img className="w-4/12 mt-10 md:mt-0 md:w-2/12" src={vector} alt="" />
            </div>
            <div className="px-5">
                <br />
                <div className="text-center [&>*]:m-5 border m-10 bg-gray-100">
                    <h4 className="py-2 text-2xl font-semibold text-gray-600 bg-blue-100 border rounded-md">Jobs Filter:</h4>
                    <button className='p-2 px-5 font-semibold text-gray-500 bg-white border' onClick={onSiteFinder}>Onsite Jobs</button><button className='p-2 px-5 font-semibold text-gray-500 bg-white' onClick={remoteFinder}>Remote Jobs</button>
                </div>
                <div className="grid grid-cols-1 gap-5 p-10">
                    {
                        filteredJobs.map(job => <AppliedJob key={job.job_id} job={job}></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;