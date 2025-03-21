import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../provider/ThemeProvider';

const Navbar = () => {
    const {theme, handelTheme} = useContext(ThemeContext)
    const { user, logOut } = useContext(AuthContext)

    const navLink = <>
        <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/paintingGallery'>Painting Gallery</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/myPaintingAndComment'>My Painting & Comment</NavLink></li>
        { user &&
            <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/addYourPainting'>Add Painting</NavLink></li>
        }
        <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/f'>About Us</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'text-fuchsia-600 btn btn-sm border-2 border-blue-500' : ''} to='/f'>Contact Me</NavLink></li>
    </>

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.info('User logout successfully', {
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
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="navbar bg-base-100 mt-0 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-bold gap-0  bg-gradient-to-r from-primary via-secondary to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"><span className=''>Artistic</span><span className=''>Avenue</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal font-semibold px-1 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">

                    <label className="grid cursor-pointer place-items-center">
                        <input
                            onChange={(e) => handelTheme(e.target.checked)}
                            type="checkbox"
                            checked={theme == 'light' ? false : true}
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>


                    <ul className="menu menu-horizontal">
                        <li className='z-10'>
                            <details className='relative'>
                                <summary>
                                    {
                                        user ?
                                            <div>
                                                {
                                                    user.photoURL == null ? <img className='w-14 h-14 rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" />
                                                }
                                            </div>
                                            : <Link to='/login'><button className="btn">Login</button></Link>
                                    }
                                </summary>
                                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 shadow p-4 absolute top-10 right-0 space-y-2">
                                    {
                                        user ? <div>
                                            <h3 className='font-medium '>username:</h3>
                                            <h2 className='font-bree text-lg font-bold'>{user?.displayName}</h2>
                                        </div> : <></>
                                    }
                                    {
                                        user ? <button onClick={handelLogOut} className='btn btn-secondary'>Logout</button> : <></>
                                    }
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Navbar;