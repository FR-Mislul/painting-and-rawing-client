import { useContext, useRef, useState } from "react";
import { FaHeart, FaComment, FaStar } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const AllPainting = ({ painting }) => {
    const { user } = useContext(AuthContext)

    const [isLike, setIsLike] = useState(false)
    const handelLike = () => {
        setIsLike(!isLike)
    }

    const displayDescription = painting.description.split(" ").slice(0, 30);

    const commentRef = useRef(null);
    const handleCommentScroll = () => {
        commentRef.current.focus();
    };

    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const comment = form.comment.value;
        const newComment = { email, userName, userPhoto, comment };
        console.log(newComment)

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 m-auto">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                            {
                                painting.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={painting.userPhoto} alt="" />
                            }
                        </div>
                        <div className="-space-y-1">
                            <h2 className="text-base font-semibold leading-none font-bree">{painting.userName}</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-600">email: {
                                painting.email == null ? <span>Private email</span> : <span>{painting.email}</span>
                            }</span>
                        </div>
                    </div>
                </div>
                <img src={painting.photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" title="Like post" className="flex items-center justify-center">
                                <FaHeart onClick={handelLike} className={isLike ? "text-red-600 bg-contain w-5 h-5 fill-current" : "w-5 h-5 fill-current"}></FaHeart>
                            </button>
                            <button type="button" title="Add a comment" className="flex items-center justify-center">
                                <FaComment onClick={handleCommentScroll} className="w-5 h-5 fill-current"></FaComment>
                            </button>
                        </div>
                    </div>
                    <div className=" pt-3 pb-2 border-y my-3">
                        <div className="flex items-center justify-between border-b-2 w-full py-2 mb-1">
                            <p className="font-black lg:text-xl md:text-lg sm:text-base font-bree">Panting : <span className="font-bold lg:text-lg md:text-base sm: text-sm font-serif">{painting.name}</span></p>
                            <div className="flex items-center lg:text-lg md:text-base sm:text-base space-x-1">
                                <FaStar className="text-yellow-500"></FaStar>
                                <span className="font-semibold font-cabin">{painting.rating}</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-black lg:text-xl md:text-lg sm:text-base font-bree">Artist : <span className="font-bold lg:text-lg md:text-base sm: text-sm font-serif">{painting.artists}</span></p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm">
                            {displayDescription.join(' ')}
                        </p>
                        <button className="btn hover:btm-nav-md hover:btn-link">See details</button>
                        <form onSubmit={handleComment}>
                            <input type="text" name="comment" ref={commentRef} placeholder="Add a comment..." className="w-full py-0.5 dark:bg- border-none rounded text-sm pl-0 dark:text-gray-800" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPainting;