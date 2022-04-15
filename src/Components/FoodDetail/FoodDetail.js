import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FoodDetail = ({ item }) => {
    const { id, name, image, description, price } = item;
    const navigate = useNavigate();
    return (
        <Col>
            <Card
                onClick={() => navigate(`/food/${id}`)}
                className='border-0'
                style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={image} style={{ width: "150px", height: '150px', margin: "0 auto" }} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <p>price: {price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default FoodDetail;