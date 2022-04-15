import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomActiveLink from '../../../Components/CustomActiveLink/CustomActiveLink';

const Foods = () => {
    return (
        <div className='mt-4'>
            <div className='food-link d-flex justify-content-center gap-5'>
                <CustomActiveLink className='text-decoration-none fw-bold ' to={'/breakfast'}>BreakFast</CustomActiveLink>
                <CustomActiveLink className='text-decoration-none fw-bold ' to={'/lunch'}>Lunch</CustomActiveLink>
                <CustomActiveLink className='text-decoration-none fw-bold ' to={'/dinner'}>Dinner</CustomActiveLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Foods;