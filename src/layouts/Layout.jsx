import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import RouteTransition from '../components/RouteTransition';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <RouteTransition>
                    <Outlet />
                </RouteTransition>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;
