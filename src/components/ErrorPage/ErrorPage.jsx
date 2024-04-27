import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto min-h-[1600px] font-fira text-center items-center  bg-[#ffba00] ">
            <div>
                <h2 className="text-5xl font-bold mb-6 pt-[200px] ">Oops!!! something went wrong</h2>
                <p className="text-xl font-bold mb-6">Sorry, We couldn't find your page</p>
                <Link to="/"><button className="btn border-none  text-2xl font-bold text-Red-500 hover:bg-green-500 hover:text-white">Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;