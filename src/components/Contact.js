import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, FloatingLabel} from 'react-bootstrap';
import SubmissionSuccess from './SubmissionSuccess';
function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setSubmitted(true); 
    };

    if (submitted) {
        return <SubmissionSuccess name={name} email={email} comment={message}  />;
    }

    return (
        <Container className="p-5 text-center">
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    value={name} 
                    onChange={event => setName(event.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control 
                    type="email" 
                    placeholder="Email address" 
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Button as="input" type="submit" value="Submit" className="btn btn-primary"/>{' '}   
            </Form>
        </Container>    
    );
}

export default Contact;