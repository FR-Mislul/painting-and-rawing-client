import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../../provider/ThemeProvider";

const MyPaintingAndComment = () => {
    const {theme} = useContext(ThemeContext)

    const [activeTeb, setActiveTeb] = useState(true)

    return (
        <div className="w-11/12 mx-auto">
            <div className={` font-black lg:text-5xl md:text-3xl sm:text-xl mb-10 text-center text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient ${theme === "dark" ? " bg-gray-800" : "bg-base-300 "} p-6`}>My Painting & Comment</div>
            <div className="flex items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
                <Link to=''
                onClick={()=> setActiveTeb(true)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTeb === true ? 'border border-b-0 border-gray-300' : 'border-b border-gray-300'} rounded-t-lg ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                    <span>My painting</span>
                </Link>
                <Link to={`comment`}
                onClick={()=> setActiveTeb(false)}
                 className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTeb === false ? 'border border-b-0' : 'border-b'} rounded-t-lg ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
                    <span>My Comment</span>
                </Link>
                <div className="w-full border-b py-[22.5px] border-gray-200"></div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MyPaintingAndComment;