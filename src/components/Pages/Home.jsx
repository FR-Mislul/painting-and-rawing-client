import React, { useContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import PaintingCard from './PaintingCard';
import CommentCard from './CommentCard';
import PaintingOne from './PaintingOne';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext);
    const [thePaintings, setThePaintings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/paintings')
            .then(res => res.json())
            .then(data => setThePaintings(data))
    }, []);
    const thePainting = [...thePaintings].reverse().slice(0, 1);
    // console.log(thePainting)

    const inPaintings = useLoaderData()
    const paintings = [...inPaintings].reverse().slice(1, 7);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    if(loading) {
        return <div className="flex flex-col m-8 rounded shadow-md w-full mx-auto sm:w-80 animate-pulse h-96">
        <div className="h-48 rounded-t dark:bg-gray-300"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
        </div>
    </div>
    }

    return (
        <div>
            <Header></Header>

            <div className='lg:w-full md:w-full w-11/12 mx-auto mt-4'>
                {
                    thePainting.map(thePaint => <PaintingOne key={thePaint._id} thePaint={thePaint}></PaintingOne>)
                }
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:my-4 sm:my-2 lg:max-w-7xl lg:w-full md:w-full w-11/12 mx-auto'>
                {
                    paintings.map(painting => <PaintingCard key={painting._id} painting={painting}></PaintingCard>)
                }
            </div>
            <div className="flex justify-center mt-3 mb-5">
                <Link to='/paintingGallery'>
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                </Link>
            </div>

            <div className='grid lg:grid-cols-2 gap-3 lg:max-w-7xl lg:w-full md:w-full w-11/12 mx-auto'>
                {
                    comments.map(comment => <CommentCard key={comment._id} comment={comment}></CommentCard>)
                }
            </div>
        </div>
    );
};

export default Home;