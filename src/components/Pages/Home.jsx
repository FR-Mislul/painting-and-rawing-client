import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import { useLoaderData } from 'react-router-dom';
import PaintingCard from './PaintingCard';
import CommentCard from './CommentCard';
import PaintingOne from './PaintingOne';

const Home = () => {
    const [thePaintings, setThePainting] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/paintings')
            .then(res => res.json())
            .then(data => setThePainting(data))
    }, [])
    const thePainting = thePaintings.slice(0, 1)
    // console.log(thePainting)

    const paintings = useLoaderData().slice(1, 7)

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

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
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
            </div>

            <div>
                {
                    comments.map(comment => <CommentCard key={comment._id} comment={comment}></CommentCard>)
                }
            </div>
        </div>
    );
};

export default Home;