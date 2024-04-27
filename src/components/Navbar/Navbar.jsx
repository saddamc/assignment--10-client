import { NavLink } from "react-router-dom";
// import userProfilePic from "../../assets/user.png";


const Navbar = () => {


    const navLinks = <>
        <li className="bg-rgb(255,81,70)"> <NavLink to="/">Home</NavLink> </li>
        <li className="bg-rgb(255,81,70)"> <NavLink to="/product">Product</NavLink> </li>
        <li className="bg-rgb(255,81,70)"> <NavLink to="/addproduct">Add Product</NavLink> </li>
        <li className=""> <NavLink to="/mycart">My Cart</NavLink> </li>

        {/* {
            user &&
            <>
                

            </>
        } */}

        <li> <NavLink to="/login">Login</NavLink> </li>
        <li> <NavLink to="/Register">Register</NavLink> </li>
    </>

    return (
        <div className="navbar font-Fira">
            <div className="navbar max-w-[1280px] mx-auto z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold gap-4 hover:text-[rgb(255,81,70)]">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <a className="text-4xl font-extrabold font-Lobster">
                            <span className="text-[#6fbb8c] ">Harbor</span>
                            <span className="text-[#FF7F00] ml-1 ">Crafts</span>
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-4 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">

                    {/* {
                        user ?
                            <Link to="/">
                                <div className="flex items-center">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={userProfilePic} />
                                        </div>
                                    </div>
                                    <button className="login-button p-2 rounded-md text-white font-semibold bg-black text-sm hover:bg-red-500 hover:rounded-md">Sign Out</button>
                                </div>
                            </Link>
                            :
                            <Link to="/login">

                                <button className="login-button p-2 rounded-md text-white font-semibold bg-black text-sm hover:bg-red-500 hover:rounded-md">Login</button>
                            </Link>
                    } */}

                </div>
            </div>


        </div>
    );
};

export default Navbar;