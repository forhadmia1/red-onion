import React from 'react';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';

const SubHeader = () => {
    return (
        <div className='food-link d-flex justify-content-center gap-5'>
            <CustomActiveLink className='text-decoration-none fw-bold ' to={'/breakfast'}>BreakFast</CustomActiveLink>
            <CustomActiveLink className='text-decoration-none fw-bold ' to={'/lunch'}>Lunch</CustomActiveLink>
            <CustomActiveLink className='text-decoration-none fw-bold ' to={'/dinner'}>Dinner</CustomActiveLink>
        </div>
    );
};

export default SubHeader;