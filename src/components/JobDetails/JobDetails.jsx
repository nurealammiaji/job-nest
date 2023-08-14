import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const job = useLoaderData();
    console.log(job);

    const {title, description, educational_requirements, requirements, experience, salary, contact, location} = job;

    return (
        <div>
            <div className="text-center bg-blue-50">
                <h3 className="text-3xl">Job Details</h3>
            </div>
            <div className="grid p-10 md:grid-cols-2">
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
                <div>
                    <div className="p-5 rounded-md bg-blue-50">
                        <h3 className="text-xl font-semibold">Job Details</h3>
                        <hr className="mt-2 mb-4" />
                        <p><span className="font-semibold">Salary:</span> {salary}</p>
                        <p className="mt-1"><span className="font-semibold">Job Title:</span> {title}</p>
                        <br />
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <hr className="mt-2 mb-4" />
                        <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
                        <p className="my-1"><span className="font-semibold">Email:</span> {contact.email}</p>
                        <p><span className="font-semibold">Address:</span> {location}</p>
                    </div>
                    <br />
                    <button className="px-48 py-2 font-semibold text-white bg-blue-500 rounded-md">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;