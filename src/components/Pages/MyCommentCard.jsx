import { useContext } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { ThemeContext } from "../../provider/ThemeProvider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";

const MyCommentCard = ({ myComment }) => {

    const { theme } = useContext(ThemeContext)

    const handelDeleteComment = _id => {
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
                    fetch(`http://localhost:5000/comments/${_id}`, {
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
        <div className={`relative w-full lg:p-3 md:p-2 p-1 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
            <div className="dropdown dropdown-end absolute top-0 right-0">
                <div tabIndex={0} role="button" className="btn"><BiDotsHorizontalRounded className="text-2xl"></BiDotsHorizontalRounded> </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                    <div onClick={() => handelDeleteComment(myComment._id)} className="flex hover:text-red-500 hover:shadow-lg hover:shadow-red-400 space-x-1 items-center cursor-pointer">
                        <MdDeleteForever className=" text-3xl  rounded-full"></MdDeleteForever>
                        <span className="font-semibold">Delete</span>
                    </div>
                    <div className="flex hover:text-blue-500 hover:shadow-lg hover:shadow-blue-400 space-x-1 items-center cursor-pointer">
                        <CiEdit className=" text-3xl rounded-full"></CiEdit>
                        <span className="font-semibold">Edit</span>
                    </div>
                </ul>
            </div>
            <div className="">
                <div className="flex items-center space-x-2">
                    <div className="object-cover object-center w-6 h-6 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                        {
                            myComment.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={myComment.userPhoto} alt="" />
                        }
                    </div>
                    <div className="-space-y-1">
                        <h2 className="text-sm font-medium leading-none font-bree">{myComment.userName}</h2>
                        <span className={`inline-block text-xs leading-none ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>email: {
                            myComment.email == null ? <span>Private email</span> : <span>{myComment.email}</span>
                        }</span>
                    </div>
                </div>
                <div>
                    <p className="ml-7 text-sm font-bree mt-2">Painting Name: {myComment.paintingName}</p>
                    <p className="ml-7 text-sm font-bree mt-1 mb-2">{myComment.comment}</p>
                </div>
                <div className="flex space-x-2 text-lg ml-7">
                    <AiFillLike></AiFillLike>
                    <AiFillDislike></AiFillDislike>
                    <FaShare></FaShare>
                </div>
            </div>
        </div>
    );
};

export default MyCommentCard;