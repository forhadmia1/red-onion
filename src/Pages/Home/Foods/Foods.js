import React from 'react';
import { Outlet } from 'react-router-dom';
import SubHeader from '../../../Components/SubHeader/SubHeader';

const Foods = () => {
    return (
        <div className='mt-4'>
            <SubHeader />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Foods;