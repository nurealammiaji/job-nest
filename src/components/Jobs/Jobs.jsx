import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

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
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;