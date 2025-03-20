import { useLoaderData } from "react-router-dom";
import MyPaintingCard from "./MyPaintingCard";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyPainting = () => {
    const {user} = useContext(AuthContext)
    const allMyPaintings = useLoaderData()
    const myPaintings = [...allMyPaintings].reverse()

    const filterUserData = myPaintings?.filter(info => info.email === user?.email);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:my-4 sm:my-2 lg:max-w-7xl lg:w-full md:w-full w-11/12 mx-auto'>
			{
                filterUserData.map(myPainting => <MyPaintingCard key={myPainting._id} myPainting={myPainting}></MyPaintingCard>)
            }
		</div>
    );
};

export default MyPainting;