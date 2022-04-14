import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './HeroArea.css'

const HeroArea = () => {
    return (
        <div className='hero-area d-flex justify-content-center align-items-center'>
            <div>
                <h2>Best Food Waiting For Your Belly</h2>
                <InputGroup className="mb-3 mt-4">
                    <FormControl
                        className='rounded-pill position-relative search-input'
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className='rounded-pill px-4 position-absolute end-0 search-btn' variant="danger" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default HeroArea;