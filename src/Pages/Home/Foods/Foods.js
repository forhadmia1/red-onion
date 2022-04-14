import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Foods = () => {
    return (
        <div className='mt-4'>
            <div className='food-link d-flex justify-content-center gap-5'>
                <Link className='text-decoration-none fw-bold text-dark' to={'/breakfast'}>BreakFast</Link>
                <Link className='text-decoration-none fw-bold text-dark' to={'/lunch'}>Lunch</Link>
                <Link className='text-decoration-none fw-bold text-dark' to={'/dinner'}>Dinner</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Foods;