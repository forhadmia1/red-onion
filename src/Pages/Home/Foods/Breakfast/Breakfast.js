import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodDetail from '../../../../Components/FoodDetail/FoodDetail';
import useFood from '../../../../hooks/useFood';

const Breakfast = () => {
    const { breakfasts } = useFood();

    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-5">
                {
                    breakfasts.map(item => <FoodDetail
                        key={item.id}
                        item={item}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;