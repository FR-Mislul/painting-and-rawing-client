import { useContext, useEffect, useRef, useState } from "react";
import { FaHeart, FaComment, FaStar } from "react-icons/fa6";
import { ThemeContext } from "../../provider/ThemeProvider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";


const MyPaintingCard = ({ myPainting }) => {
    const { theme } = useContext(ThemeContext)

    const [isLike, setIsLike] = useState(false)

    useEffect(() => {
        const savedLike = localStorage.getItem(`like-${myPainting._id}`);
        if (savedLike) {
            setIsLike(JSON.parse(savedLike)); // Convert string back to boolean
        }
    }, [myPainting._id]);

    const handelLike = () => {
        const newLike = !isLike
        setIsLike(newLike)
        localStorage.setItem(`like-${myPainting._id}`, JSON.stringify(newLike));
    }

    const displayDescription = myPainting.description.split(" ").slice(0, 30);

    const handelDeletePainting = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/paintings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className={`rounded-md shadow-md sm:w-96 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"} m-auto`}>
            <div className="flex items-center justify-between p-3 relative">
                <div className="dropdown dropdown-end absolute top-0 right-0">
                    <div tabIndex={0} role="button" className="btn"><BiDotsHorizontalRounded className="text-xl"></BiDotsHorizontalRounded> </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                        <div onClick={() => handelDeletePainting(myPainting._id)} className="flex hover:text-red-500 hover:shadow-lg hover:shadow-red-400 space-x-1 items-center cursor-pointer">
                            <MdDeleteForever className=" text-3xl  rounded-full"></MdDeleteForever>
                            <span className="font-semibold">Delete</span>
                        </div>
                        <div className="flex hover:text-blue-500 hover:shadow-lg hover:shadow-blue-400 space-x-1 items-center cursor-pointer">
                            <CiEdit className=" text-3xl rounded-full"></CiEdit>
                            <span className="font-semibold">Edit</span>
                        </div>
                    </ul>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                        {
                            myPainting.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={myPainting.userPhoto} alt="" />
                        }
                    </div>
                    <div className={`-space-y-1 ${theme === "dark" ? "text-gray-50" : "text-black"}`}>
                        <h2 className="text-base font-semibold leading-none font-bree">{myPainting.userName}</h2>
                        <span className={`inline-block text-xs leading-none ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>email: {
                            myPainting.email == null ? <span>Private email</span> : <span>{myPainting.email}</span>
                        }</span>
                    </div>
                </div>
            </div>
            <img src={myPainting.photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button type="button" title="Like post" className="flex items-center justify-center">
                            <FaHeart onClick={handelLike} className={isLike ? "text-red-600 bg-contain w-5 h-5 fill-current" : "w-5 h-5 fill-current"}></FaHeart>
                        </button>
                        <button type="button" title="Add a comment" className="flex items-center justify-center">
                            <FaComment className="w-5 h-5 fill-current"></FaComment>
                        </button>
                    </div>
                </div>
                <div className=" pt-3 pb-2 border-y my-3">
                    <div className="flex items-center justify-between border-b-2 w-full py-2 mb-1">
                        <p className="font-black lg:text-xl md:text-lg sm:text-base font-bree">Panting : <span className="font-bold lg:text-lg md:text-base sm: text-sm font-serif">{myPainting.name}</span></p>
                        <div className="flex items-center lg:text-lg md:text-base sm:text-base space-x-1">
                            <FaStar className="text-yellow-500"></FaStar>
                            <span className="font-semibold font-cabin">{myPainting.rating}</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-black lg:text-xl md:text-lg sm:text-base font-bree">Artist : <span className="font-bold lg:text-lg md:text-base sm: text-sm font-serif">{myPainting.artists}</span></p>
                    </div>
                </div>
                <div className="space-y-3">
                    <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {displayDescription.join(' ')}
                    </p>
                    <button className="btn hover:btm-nav-md hover:btn-link">See details</button>
                </div>
            </div>
        </div>
    );
};

export default MyPaintingCard;