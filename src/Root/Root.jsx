import React from 'react';
import Navbar from '../components/ErrorPage/SharedFile/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;