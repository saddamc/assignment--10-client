import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    useEffect(() => {
        document.title = `HARBOR | REGISTER`;
    })

    const { createUser } = useContext(AuthContext);


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


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: "success",
                    title: "Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error)
            })

    }





    return (
        <div className="font-Roboto bg-slate-200 h-[1000px] mx-auto lg:w-[1280px] md:w-[750px] ">
            <div className="hero-content flex-col pt-24 ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-stone-400 ">Register now!</h1>

                </div>
                <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-[#ffba00] ">
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
                        <div className="form-control mt-1">
                            <button className="btn btn-neutral border-none font-bold text-lg uppercase hover:bg-green-500 hover:text-black
                            
                            ">Register</button>
                        </div>
                        <Link className="mx-auto mt-1 " to="/login"><p>Already have account? Please <button className="border-b border-blue-600 text-blue-600 font-bold">Login</button> </p></Link>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Register;