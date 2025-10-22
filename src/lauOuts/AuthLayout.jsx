import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/homelayout/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;