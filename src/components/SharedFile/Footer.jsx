import { useContext } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../provider/ThemeProvider";

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`py-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'} mt-2`}>
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                                <img className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50" src="../../../public/painting-icon.png" alt="" />
                            </div>
                            <div className="lg:text-4xl  text-2xl font-bold">
                                <span className='text-primary'>Artistic</span><span className='text-secondary'>Avenue</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/f'>Painting Gallery</Link></li>
                            <li><Link to='/myPainting'>My Painting</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li><Link to='/addYourPainting'>Add Painting</Link></li>
                            <li><Link to='/f'>About Us</Link></li>
                            <li><Link to='/f'>Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2024 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a href="https://www.facebook.com/FRMislul1"><FaFacebook className="w-11 h-11 text-blue-500"></FaFacebook></a>
                        <a href="https://www.instagram.com/frmislulalom?igsh=MWEwa2JpMTY2c3h2NA=="><FaInstagram className="w-11 h-11 text-blue-500"></FaInstagram></a>
                        <a href="https://github.com/FR-Mislul"><FaGithub className="w-11 h-11 text-blue-500"></FaGithub></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;