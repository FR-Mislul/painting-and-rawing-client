import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../provider/ThemeProvider";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateComment = () => {

    const { theme } = useContext(ThemeContext)

    const thisComment = useLoaderData()
    
    const handleEditComment = e => {
        e.preventDefault();
        const form = e.target;
        // const email = user.email;
        // const userName = user.displayName;
        // const userPhoto = user.photoURL;
        // const paintingName = painting.name;
        const comment = form.comment.value;
        const newComment = { comment };
        console.log(newComment)

        fetch(`https://painting-and-rawing-server.vercel.app/comments/${thisComment._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Comment Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    return;
                }
            })
    }

    return (
        <div>
            <div className={`relative w-full lg:p-3 md:p-2 p-1 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                <div className="">
                    <div className="flex items-center space-x-2">
                        <div className="object-cover object-center w-6 h-6 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                            {
                                thisComment.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={thisComment.userPhoto} alt="" />
                            }
                        </div>
                        <div className="-space-y-1">
                            <h2 className="text-sm font-medium leading-none font-bree">{thisComment.userName}</h2>
                            <span className={`inline-block text-xs leading-none ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>email: {
                                thisComment.email == null ? <span>Private email</span> : <span>{thisComment.email}</span>
                            }</span>
                        </div>
                    </div>
                    <div>
                        <p className="ml-7 text-sm font-bree mt-2">Painting Name: {thisComment.paintingName}</p>
                        <form onSubmit={handleEditComment} className="my-2 ml-5">
                            <input type="text" name="comment" defaultValue={thisComment.comment} placeholder="Add a comment..." className={`w-full py-1 px-4 dark:bg- border-none rounded text-base ${theme === "dark" ? 'text-gray-200' : 'text-gray-800'}`} />
                        </form>
                    </div>
                    <div className="flex space-x-2 text-lg ml-7">
                        <AiFillLike></AiFillLike>
                        <AiFillDislike></AiFillDislike>
                        <FaShare></FaShare>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateComment;