import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card} from 'react-bootstrap';

function SubmissionSuccess(props) {
    
    return (
        <Container className="p-5 text-center">
            <Card border="success">
                <Card.Header>Success</Card.Header>
                <Card.Body>
                    <Card.Title>Thank you {props.name}! Your message has been sent.</Card.Title>
                    <Card.Text>
                        {props.name} <br/>
                        {props.email} <br/>
                        {props.comment}
                    </Card.Text>
                </Card.Body>

            </Card>    
        </Container>
    );
}

export default SubmissionSuccess;