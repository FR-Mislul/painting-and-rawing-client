import { useContext, useRef, useState } from "react";
import { FaComment, FaHeart, FaStar } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const PaintingOne = ({ thePaint }) => {
    const { user } = useContext(AuthContext)

    const [isLike, setIsLike] = useState(false)
    const handelLike = () => {
        setIsLike(!isLike)
    }

    const displayDescription = thePaint.description.split(" ").slice(0, 30);

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
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-7xl lg:p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="flex space-x-1">
                    <div className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300">
                        {
                            thePaint.userPhoto == null ? <img className='rounded-full' src="https://i.ibb.co.com/kcJNYB0/images.png" alt="" /> : <img className="rounded-full" src={thePaint.userPhoto} alt="" />
                        }
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold leading-none font-bree">{thePaint.userName}</h2>
                        <span className="inline-block text-base leading-none dark:text-gray-600">email: {
                            thePaint.email == null ? <span>Private email</span> : <span>{thePaint.email}</span>
                        }</span>
                    </div>
                </div>
                <div className="lg:block flex flex-col-reverse">

                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={thePaint.photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:-mt-10 lg:col-span-7 dark:bg-gray-500" />
                        <div className="lg:p-6 md:p-5 p-4 lg:-mt-16 space-y-2 lg:col-span-5 lg:block flex flex-col-reverse">
                            <div>
                                <div className="lg:block flex justify-between items-center border-t border-b-2 py-3">
                                    <h3 className="font-black lg:text-4xl md:text-2xl sm:text-base font-bree">Panting : <span className="font-bold lg:text-3xl md:text-xl sm: text-sm font-serif">{thePaint.name}</span></h3>
                                    <div className="flex items-center lg:text-lg md:text-base sm:text-base space-x-1">
                                        <FaStar className="text-yellow-500"></FaStar>
                                        <span className="font-semibold font-cabin">{thePaint.rating}</span>
                                    </div>
                                </div>
                                <p className="font-black lg:text-4xl md:text-2xl sm:text-base font-bree border-b py-2">Artist : <span className="font-bold lg:text-3xl md:text-xl sm: text-sm font-serif">{thePaint.artists}</span></p>
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
                            <div className="flex items-center space-x-3 lg:mt-5 md:mt-4 mt-2">
                                <button type="button" title="Like post" className="flex items-center justify-center">
                                    <FaHeart onClick={handelLike} className={isLike ? "text-red-600 bg-contain w-5 h-5 fill-current" : "w-5 h-5 fill-current"}></FaHeart>
                                </button>
                                <button type="button" title="Add a comment" className="flex items-center justify-center">
                                    <FaComment onClick={handleCommentScroll} className="w-5 h-5 fill-current"></FaComment>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PaintingOne;