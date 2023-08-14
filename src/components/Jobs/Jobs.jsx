import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [visible, setVisible] = useState(4);

    useEffect( () => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    })

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 2)
    }

    return (
        <div className="p-10">
            <br />
            <div className="text-center">
                <h3 className="text-3xl font-bold">Featured Jobs</h3>
                <br />
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, visible).map(job => <Job key={job.job_id} job={job}></Job>)
                }
            </div>
            <br /><br />
            <div className='text-center'>
                <button className="px-4 py-3 font-semibold text-white bg-blue-500 rounded-md" onClick={loadMore}>See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;