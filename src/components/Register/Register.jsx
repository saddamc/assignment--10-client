import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    useEffect(() => {
        document.title = `HARBOR | REGISTER`;
    })

    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        const terms = form.get('terms')
        console.log(name, email, photo, password, terms);

        // password conditions
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Password must be at least 6 characters !</a>'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Uppercase Letter !</a>'
            }); ('Must have an ');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Lowercase Letter !</a>'
            });
            return;
        }
        else if (!/[0-9]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Numeric key !</a>'
            });
            return;
        }

        setRegisterError('');
        setSuccess('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Register Successful !",
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
                    footer: (error.message.slice(9))
                });
            })

    }





    return (
        <div className="font-Roboto bg-slate-200 h-[1000px] mx-auto lg:w-[1280px] md:w-[750px] ">
            <div className="hero-content flex-col pt-24 ">
                <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-[#ffba00] ">
                    <div className="items-center text-center mt-12 ">
                        <a className="text-4xl font-extrabold font-Lobster">
                            <span className="text-[#6fbb8c] ">Harbor</span>
                            <span className="text-[#FF7F00] ml-1 ">Crafts</span>
                        </a>
                    </div>
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                className="input input-bordered" type="text" name="name"
                                placeholder="Your Name" id="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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
                            <div className="flex gap-2">
                                <input type="checkbox" name="terms" id="terms" required />
                                <label htmlFor="terms">Accept our Terms & Condition</label>
                            </div>
                        </div>
                        <div className="form-control mt-1 shadow-lg shadow-slate-100">
                            <button className="btn btn-neutral border-none font-bold text-lg uppercase hover:bg-green-500 hover:text-black
                            
                            ">Register</button>
                        </div>
                        <Link className="mx-auto mt-1 mb-4 " to="/login"><p>Already have account? Please <button className="border-b border-blue-600 text-blue-600 font-bold">Login</button> </p></Link>
                    </form>
                    {
                        registerError && <p className="text-red-700 mx-auto mb-2">
                            {registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 mx-auto mb-2">{success}</p>
                    }

                </div>

            </div>
        </div>
    );
};

export default Register;