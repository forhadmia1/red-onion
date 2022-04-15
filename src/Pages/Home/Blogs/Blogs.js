import React from 'react';
import blog1 from '../../../Assets/images/adult-blur-blurred-background-687824.png'
import blog2 from '../../../Assets/images/architecture-building-city-2047397.png'
import blog3 from '../../../Assets/images/chef-cook-food-33614.png'
import BlogCard from '../../../Components/BlogCard/BlogCard';
import icon1 from '../../../Assets/images/icons/Group 204.png'
import icon2 from '../../../Assets/images/icons/Group 245.png'
import icon3 from '../../../Assets/images/icons/Group 1133.png'
import { Row } from 'react-bootstrap';

const blogs = [
    { id: 1, name: 'happy ending', image: blog1, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.In temporibus harum eum sequi dolore alias animi, nemo blanditiis sed corporis.', icon: icon1 },
    { id: 2, name: 'happy ending', image: blog2, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.In temporibus harum eum sequi dolore alias animi, nemo blanditiis sed corporis.', icon: icon2 },
    { id: 3, name: 'happy ending', image: blog3, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.In temporibus harum eum sequi dolore alias animi, nemo blanditiis sed corporis.', icon: icon3 }
]

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Why you choose us?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> In temporibus harum eum sequi dolore alias animi, nemo blanditiis sed corporis.</p>
            <Row xs={1} md={3} className="g-4 mt-3">
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </Row>
        </div >
    );
};

export default Blogs;