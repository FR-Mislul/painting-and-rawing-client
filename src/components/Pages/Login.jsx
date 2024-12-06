import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { Flip, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

const Login = () => {

    const { user, signInUser, googleLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState();

    const navigate = useNavigate();
    const location = useLocation();


    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)
        if (user) {
            toast.error('User already logged in', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            return;
        }
        else {
            signInUser(email, password)
                .then(result => {
                    console.log(result.user)
                    e.target.reset()
                    toast.success('Your account login successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Flip,
                    });
                    if (result.user) {
                        navigate(location.state || '/')
                    }
                    return;
                })
                .catch(error => {
                    console.log(error)
                    toast.error(error.message.split('/')[1], {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    });
                })
        }
    }

    const handleGoogleLogin = () => {
        if (user) {
            toast.error('User already logged in', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            return;
        }
        else {
            googleLogin()
                .then(result => {
                    console.log(result.user)
                    toast.success('Google login successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Flip,
                    });
                    if (result.user) {
                        navigate(location.state || '/')
                    }
                    return;
                })
                .catch(error => {
                    console.log(error)
                    toast.error(error.message.split('/')[1], {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    });
                })
        }
    }

    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto my-2 md:my-3 lg:my-5 max-w-md p-8 space-y-3 rounded-xl dark:text-gray-50 dark:bg-gray-800">
            <h1 className="text-2xl font-bold text-center font-bree">Login</h1>
            <form onSubmit={handelLogin} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-base font-medium dark:text-white font-cabin">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md font-josefin dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block dark:text-white text-base font-medium font-cabin">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full px-4 py-3 font-josefin rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    <span className="absolute top-10 text-lg text-black right-6 cursor-pointer" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>
                    <div className="flex justify-end text-xs dark:text-white">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 font-cabin text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 hover:bg-violet-400">Login</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-white">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 btn btn-outline btn-accent">
                    <div className=" flex justify-center items-center gap-2 ">
                        <FaGoogle className="text-lg"></FaGoogle> <span className="">Google</span>
                    </div>
                </button>
                <button aria-label="Log in with GitHub" className="p-3 btn btn-outline btn-secondary">
                    <FaGithub className="text-xl"></FaGithub> <span className="">Google</span>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-white">Don't have an account?
                <Link to='/registration' rel="noopener noreferrer" className="underline text-blue-600 text-base">Registration</Link>
            </p>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;