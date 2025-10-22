import React from 'react';
import NavBar from '../components/homelayout/NavBar';
import HeroSection from '../components/homelayout/HeroSection';
import Categories from '../components/homelayout/Categories';
import Services from '../components/homelayout/Services';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
                <HeroSection></HeroSection>
            </header>
            <main>
                <Categories></Categories>
                <div className='w-11/12 grid grid-cols-12 *:border mx-auto'>
                <div className='col-span-9' >
                <Services></Services>

                </div>
                <div className='col-span-3'>
                    veterans tips
                </div>

                </div>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;