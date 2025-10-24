import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/homelayout/NavBar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;