import { useLoaderData } from "react-router-dom";
import AllPainting from "./AllPainting";


const PaintingGallery = () => {
    const allPaintings = useLoaderData()
    const paintings = [...allPaintings].reverse()

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:my-4 sm:my-2 lg:max-w-7xl lg:w-full md:w-full w-11/12 mx-auto'>
                {
                    paintings.map(painting => <AllPainting key={painting._id} painting={painting}></AllPainting>)
                }
            </div>
        </div>
    );
};

export default PaintingGallery;