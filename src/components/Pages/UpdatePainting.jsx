import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ThemeContext } from "../../provider/ThemeProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdatePainting = () => {

    const { theme } = useContext(ThemeContext)

    const painting = useLoaderData() 

    const handelEditPainting = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const artists = form.artists.value;
        const date = form.date.value;
        const cost = form.cost.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newPainting = { name, artists, date, cost, rating, customization, photo, description }
        

        if (description.length < 30) {
            alert('description must be 30 words')
            return;
        }

        fetch(`https://painting-and-rawing-server.vercel.app/paintings/${painting._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPainting)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Painting Edit Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    })
                    return;
                }
            })
    }

    return (
        <div>
            <form onSubmit={handelEditPainting}>
                <div className={`${theme === "dark" ? "bg-[#8b1351] text-white" : "bg-[#48e2b9]"} w-11/12 lg:w-10/12 m-auto px-4 py-2 md:px-10 md:py-7 lg:px-28 lg:py-16 rounded-lg mt-2`}>
                    <h1 className='text-center mb-4 text-3xl font-bree font-bold'> Edit <span className="text-blue-600">Y</span><span className="text-blue-500">o</span><span className="text-blue-400">u</span><span className="text-blue-300">r</span> Painting </h1>
                    <h1 className='text-center font-cabin lg:text-lg mb-6'> Unleash your creativity and take a bold step toward sharing your art with the world. Each stroke, each color, is a piece of your vision. Capture emotions, tell stories, and let your unique perspective inspire others. Transform your canvas into a world of wonder. </h1>
                    <div className='lg:flex'>
                        <div className='lg:mx-4 w-full lg:w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Painting Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='name' placeholder="Your Painting Name" defaultValue={painting.name} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Artists Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='artists' placeholder="Artists Name" defaultValue={painting.artists} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg"> Processing Date</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='date' placeholder="DD/MM/YY" defaultValue={painting.data} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:mx-4 w-full lg:w-1/2 '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Cost</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='cost' placeholder="Cost of painting" defaultValue={painting.cost} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Rating</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='rating' placeholder="Rating this painting" defaultValue={painting.rating} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg"> Customization Example</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='customization' placeholder="Yes/No" defaultValue={painting.customization} className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control lg:mx-4">
                        <label className="label">
                            <span className="label-text font-medium font-cabin text-lg">Photo</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='photo' placeholder="Painting URL" defaultValue={painting.photo} className="input input-bordered font-josefin w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:mx-4">
                        <label className="label">
                            <span className="label-text font-medium font-cabin text-lg">Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='description' placeholder="Painting Description" defaultValue={painting.description} className="input input-bordered font-josefin w-full" />
                        </label>
                    </div>

                    <div className={`form-control mx-4 mt-5 ${theme === "dark" ? "badge-info" : "bg-[#f8ff6b]"}  py-2 rounded-md`}>
                        <input className='font-medium cursor-pointer' type="submit" value="Edit Painting" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdatePainting;