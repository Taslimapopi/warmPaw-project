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
                <HeroSection></HeroSection>
                <Categories></Categories>
                <div className='md:w-11/12 grid grid-cols-1 md:grid md:grid-cols-12 mx-auto'>
                <div className='col-span-9' >
                    <Outlet></Outlet>
                

                </div>
                <div className='col-span-3'>
                    <Veteran></Veteran>
                </div>

                </div>
                <WinterCareTips></WinterCareTips>
                <PhotoGallery></PhotoGallery>
                <CustomerTestimonials></CustomerTestimonials>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;