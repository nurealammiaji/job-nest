import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className="text-center" id="error-page">
            <br /><br />
            <h1 className="text-4xl">{error.status} || {error.statusText}</h1>
            <br /><br />
            <h3 className="text-2xl font-bold">Opps! Somethis is wrong ...</h3>
            <br /><br />
            <p className="text-red-500">{error.data}</p>
            <br /><br />
            <Link to="/"><button className="bg-blue-500 text-white font-semibold py-3 px-5 rounded-md">Return to Home</button></Link>
        </div>
    );
};

export default ErrorPage;