const detailsLoader = async (id) => {

    const jobLoader = await fetch("jobs.json");
    const jobs = await jobLoader.json();

    const specificJob = jobs.find(job => job.job_id === id);

    return specificJob;
}

export default detailsLoader;