import vector from "../../../public/assets/images/Vector.png";
import Chart from "../Chart/Chart";

const Statistics = () => {

    return (
        <div>
            <div className="bg-blue-50">
                <br /><br />
                <h3 className="ml-5 text-3xl font-bold md:ml-0 md:text-center">Statistics</h3>
                <br />
                <img className="w-4/12 mt-10 md:mt-0 md:w-2/12" src={vector} alt="" />
            </div>
            <div className="mt-5 md:mt-0 md:p-10 md:ml-40">
                <Chart></Chart>
            </div>
        </div>
    );
};

export default Statistics;