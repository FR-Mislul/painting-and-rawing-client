import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, Zoom, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

const Registration = () => {

    const { user, createUser, updateUserProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate();
    const location = useLocation(); 

    const handelRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        console.log(name, email, photo, password)

        if(user) {
            toast.error('Already user is logged in 😊', {
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
                return;
        }
        else if(password.length < 6) {
            toast.error('Password must be 6 characters ✍️', {
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
                return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Password must be 1 uppercase', {
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
            return;
        }
        else if (!/^(?=.*[a-z]).+$/.test(password)) {
            toast.error('Password must be 1 lowercase', {
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
            return;
        }
        else if (!/^(?=.*[0-9]).+$/.test(password)) {
            toast.error('Password must be 1 number', {
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
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            updateUserProfile(name, photo)
            .then(result => {
                // console.log(result.user)
            })
            e.target.reset()
            toast.success('Registration Successfully 😱', {
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
            if (result.user) {
                navigate(location.state || '/')
            }
        })
        .catch(error => {
            console.error(error)
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

    return (
        <div className="flex flex-col max-w-md w-full md:w-2/3 lg:w-1/2 mx-auto my-2 md:my-3 lg:my-5 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold font-bree">Sign in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handelRegistration} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-base font-cabin font-medium">Full Name</label>
                        <input type="text" name="name" placeholder="Your full name" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 font-josefin" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-base font-cabin font-medium">Email address</label>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 font-josefin" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-base font-cabin font-medium">Photo URL</label>
                        <input type="text" name="photo" placeholder="Your photo url/link " className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 font-josefin" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block mb-2 text-base font-cabin font-medium">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        <span className="absolute top-11 right-6 text-lg cursor-pointer" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-400">Registration</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <Link to='/login' rel="noopener noreferrer" className="underline text-blue-600 text-base">Login</Link>.
                    </p>
                </div>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;