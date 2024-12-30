import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";

const CommentCard = ({ comment }) => {
    return (
        <div className="w-full lg:p-3 md:p-2 p-1 rounded-md bg-gray-100">
            <div>
                <div className="flex items-center space-x-2">
                    <div className="object-cover object-center w-6 h-6 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                        {
                            comment.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={comment.userPhoto} alt="" />
                        }
                    </div>
                    <div className="-space-y-1">
                        <h2 className="text-sm font-medium leading-none font-bree">{comment.userName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-600">email: {
                            comment.email == null ? <span>Private email</span> : <span>{comment.email}</span>
                        }</span>
                    </div>
                </div>
                <p className="ml-7 text-sm font-bree">{comment.comment}</p>
                <div className="flex space-x-2 text-lg ml-7">
                    <AiFillLike></AiFillLike>
                    <AiFillDislike></AiFillDislike>
                    <FaShare></FaShare>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;