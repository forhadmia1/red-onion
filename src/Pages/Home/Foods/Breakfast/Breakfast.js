import React from 'react';
import breakfast1 from '../../../../Assets/images/breakfast/breakfast1.png'
import breakfast2 from '../../../../Assets/images/breakfast/breakfast2.png'
import breakfast3 from '../../../../Assets/images/breakfast/breakfast3.png'
import breakfast4 from '../../../../Assets/images/breakfast/breakfast4.png'
import breakfast5 from '../../../../Assets/images/breakfast/breakfast5.png'
import breakfast6 from '../../../../Assets/images/breakfast/breakfast6.png'
import FoodDetail from '../../../../Components/FoodDetail/FoodDetail';


const breakfast = [
    { id: 1, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast1 },
    { id: 2, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast2 },
    { id: 3, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast3 },
    { id: 4, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast4 },
    { id: 5, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast5 },
    { id: 6, name: 'breakfast 1', price: 124, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quae est corporis magnam, et totam doloremque repudiandae ut reprehenderit?', image: breakfast6 },
]

const Breakfast = () => {
    return (
        <div>
            {
                breakfast.map(item => <FoodDetail
                    key={item.id}
                    item={item}
                />)
            }
        </div>
    );
};

export default Breakfast;