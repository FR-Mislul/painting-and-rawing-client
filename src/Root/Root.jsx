import React from 'react';
import Navbar from '../components/SharedFile/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/SharedFile/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;