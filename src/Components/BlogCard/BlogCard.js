import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    const { name, image, text, icon } = blog;
    return (
        <Col>
            <Card className='border-0 blog-card'>
                <Card.Img className='blog-img' variant="top" height={350} src={image} />
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <img className='me-2' src={icon} alt="" />
                        <Card.Title>{name}</Card.Title>
                    </div>
                    <Card.Text className='ms-5 ps-2'>
                        {text}
                    </Card.Text>
                    <button className='ms-5 border-0 text-info fw-bold'>See More <FontAwesomeIcon
                        className='text-success' icon={faArrowCircleRight} /></button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;