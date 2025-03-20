import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import { ThemeContext } from '../../provider/ThemeProvider';

const AddYourPainting = () => {
    const { user } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)

    const handelAddPainting = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const name = form.name.value;
        const artists = form.artists.value;
        const date = form.date.value;
        const cost = form.cost.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newPainting = {email, userName, userPhoto, name, artists, date, cost, rating, customization, photo, description}

        if(description.length < 30){
            alert('description must be 30 words')
            return;
        }

        fetch('http://localhost:5000/paintings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newPainting)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Painting Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                  })
                  ref
                  return;
            }
        })
    }
    return (
        <div>
            <form onSubmit={handelAddPainting}>
                <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#F4F3F0]"} w-11/12 lg:w-10/12 m-auto px-4 py-2 md:px-10 md:py-7 lg:px-28 lg:py-16 rounded-lg mt-2`}>
                    <h1 className='text-center mb-4 text-3xl font-bree font-bold'> Add <span className="text-orange-600">Y</span><span className="text-orange-500">o</span><span className="text-orange-400">u</span><span className="text-orange-300">r</span> Painting </h1>
                    <h1 className='text-center font-cabin lg:text-lg mb-6'> Unleash your creativity and take a bold step toward sharing your art with the world. Each stroke, each color, is a piece of your vision. Capture emotions, tell stories, and let your unique perspective inspire others. Transform your canvas into a world of wonder. </h1>
                    <div className='lg:flex'>
                        <div className='lg:mx-4 w-full lg:w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Painting Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='name' placeholder="Your Painting Name" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Artists Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='artists' placeholder="Artists Name" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg"> Processing Date</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='date' placeholder="DD/MM/YY" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:mx-4 w-full lg:w-1/2 '>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Cost</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='cost' placeholder="Cost of painting" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg">Rating</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='rating' placeholder="Rating this painting" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium font-cabin text-lg"> Customization Example</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='customization' placeholder="Yes/No" required className="input input-bordered font-josefin w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control lg:mx-4">
                        <label className="label">
                            <span className="label-text font-medium font-cabin text-lg">Photo</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='photo' placeholder="Painting URL" required className="input input-bordered font-josefin w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:mx-4">
                        <label className="label">
                            <span className="label-text font-medium font-cabin text-lg">Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='description' placeholder="Painting Description" required className="input input-bordered font-josefin w-full" />
                        </label>
                    </div>

                    <div className={`form-control mx-4 mt-5 ${theme === "dark" ? "bg-secondary" : "bg-[#D2B48C]"}  py-2 rounded-md`}>
                        <input className='font-medium cursor-pointer' type="submit" value="Add Painting"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddYourPainting;