import React from 'react';
import { Card,Pagination } from 'react-bootstrap';
const Post = () => (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>React and Flutter Features</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                                </Card.Text>
                <Card.Link href="#" className="btn btn-primary">Read More</Card.Link>
                <Card.Link href="#">Comment</Card.Link>
                <Card.Link href="#">Add Post</Card.Link>
            </Card.Body>
        </Card>
        
        <Pagination style={{ marginTop:"30px"}}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </div>
);

export default Post;

Post.propTypes = {
};