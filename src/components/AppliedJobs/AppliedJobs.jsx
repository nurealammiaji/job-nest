import { useLoaderData } from "react-router-dom";
import AppliedJob from '../AppliedJob/AppliedJob';
import vector from "../../../public/assets/images/Vector.png"

const AppliedJobs = () => {

    const jobs = useLoaderData();

    return (
        <div>
            <div className="bg-blue-50">
                <br /><br />
                <h3 className="ml-5 text-3xl font-bold md:ml-0 md:text-center">Applied Jobs</h3>
                <br />
                <img className="w-4/12 mt-10 md:mt-0 md:w-2/12" src={vector} alt="" />
            </div>
            <div className="px-5">
                <div className="grid grid-cols-1 gap-5 p-10">
                    {
                        jobs.map(job => <AppliedJob key={job.job_id} job={job}></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;