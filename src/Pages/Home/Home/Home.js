import React from 'react';
import Blogs from '../Blogs/Blogs';
import Foods from '../Foods/Foods';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
            <HeroArea />
            <Foods />
            <Blogs />
        </div>
    );
};

export default Home;