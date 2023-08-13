const Job = ({job}) => {

    const {title, company, image, type, location, salary} = job;
    console.log(job);

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <h4 className="text-xl">{title}</h4>
            <p>{company}</p>
            <div>
                <span>{type[0]}</span><span>{type[1]}</span>
            </div>
            <div>
                <span>{location}</span><span>{salary}</span>
            </div>
        </div>
    );
};

export default Job;