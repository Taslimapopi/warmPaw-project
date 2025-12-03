import React from 'react';
import NavBar from '../components/homelayout/NavBar';
import HeroSection from '../components/homelayout/HeroSection';
import Categories from '../components/homelayout/Categories';
import Services from '../components/homelayout/Services';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Veteran from '../components/Veteran';
import WinterCareTips from '../components/homelayout/WinterCareTips';
import PhotoGallery from '../components/homelayout/Photogallery';
import CustomerTestimonials from '../components/homelayout/CustomerTestimonials';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
                
            </header>
           <main>
            <Outlet></Outlet>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;