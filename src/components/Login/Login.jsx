import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    useEffect(() => {
        document.title = `HARBOR | LOGIN`;
    })

    const { loginIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('location login', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');
        setSuccess('');



        loginIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login Successful !",
                    text: "You clicked the button!",
                    icon: "success"
                });
                e.target.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: (error.message.slice(9, 41))
                });
            })


    }



    return (
        <div className="font-Roboto bg-slate-200 h-[1000px] mx-auto lg:w-[1280px] md:w-[750px] ">
            <div className="hero-content flex-col pt-24  ">

                <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-[#ffba00] ">
                    <div className="items-center text-center mt-12 ">
                        <a className="text-4xl font-extrabold font-Lobster">
                            <span className="text-[#6fbb8c] ">Harbor</span>
                            <span className="text-[#FF7F00] ml-1 ">Crafts</span>
                        </a>
                    </div>
                    <form onSubmit={handleLogin} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                <span className="absolute mt-4 ml-1">

                                </span>
                            </div>
                            <br />

                        </div>
                        <div className="form-control mt-1">
                            <button className="btn btn-neutral border-none font-bold text-lg uppercase hover:bg-green-500 hover:text-black
                            
                            ">Login</button>
                        </div>
                        <Link className="mx-auto mt-1 " to="/register"><p>Don't have an account? Please <button className="border-b border-blue-600 text-blue-600 font-bold">Register</button> </p></Link>
                    </form>
                    {
                        loginError && <p className="text-red-700 mx-auto mb-2">{loginError}</p>
                    }
                    {
                        success && <p className="text-green-600 mx-auto mb-2">{success}</p>
                    }


                    <div className="  min-w-[255px] min-h-[45px] items-center pt-1 rounded-md mx-auto mb-10 space-y-2 justify-center text-center">

                        <div className="flex gap-4 justify-center">
                            <div>
                                <button className="bg-yellow-700 px-2 py-1 font-semibold text-white rounded-md flex items-center">
                                    <FcGoogle></FcGoogle>
                                    <span className="ml-1">Google</span></button>
                            </div>
                            <div>
                                <button className="bg-slate-600 px-2 py-1 font-semibold text-white rounded-md flex items-center">
                                    <FaGithub></FaGithub>
                                    <span className="ml-1">GitHub</span></button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Login;