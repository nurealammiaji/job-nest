const Category = ({category}) => {

    const {icon, job_quantity, name} = category;
    console.log(category)
    return (
        <div className="p-5 bg-blue-50">
            <div>
                <img src={icon} alt="" />
            </div>
            <h4 className="my-3 text-xl">{name}</h4>
            <p className="text-gray-500">{job_quantity} Jobs Available</p>
        </div>
    );
};

export default Category;