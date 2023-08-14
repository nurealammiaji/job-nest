import { getShoppingCart } from "./fakedb";

const appliedJobsLoader = async () => {

    const jobsLoader = await fetch("jobs.json");
    const jobs = await jobsLoader.json();

    const storedJobs = getShoppingCart();
    const savedJobs = [];

    for (const id in storedJobs) {
        const addedJobs = jobs.find(job => job.job_id === id);
        if (addedJobs) {
            savedJobs.push(addedJobs);
        }
    }

    return savedJobs;
}

export default appliedJobsLoader;