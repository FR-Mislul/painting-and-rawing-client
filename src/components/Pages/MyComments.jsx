import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ThemeContext } from "../../provider/ThemeProvider";
import MyCommentCard from "./MyCommentCard";

const MyComments = () => {
    const { user } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)

    const allMyComments = useLoaderData()
    const myComments = [...allMyComments].reverse()
    console.log(myComments)

    const filterMyComments = myComments.filter(info => info.email === user.email)
    console.log(filterMyComments.length)
    return (
        <div>
            {
                filterMyComments.length == 0 ?
                    <div>
                        <p className={`${theme === "dark" ? "text-gray-100" : "text-gray-800"} font-bree font-bold lg:text-4xl md:text-3xl sm:text-2xl mt-5 mb-20`}>You have not commented yet</p>
                    </div>
                    :
                    <div className="grid gap-3 lg:max-w-7xl lg:w-full md:w-full w-11/12 mx-auto mt-5">
                        {
                            filterMyComments.map(myComment => <MyCommentCard key={myComment._id} myComment={myComment}></MyCommentCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyComments;