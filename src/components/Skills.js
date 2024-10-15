import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
function Skills() {
    return (
        <Container className="p-5 text-center">
            <h1>My Skills</h1>
            <ul>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JQuery</li>
                <li>PHP</li>
                <li>React</li>
            </ul>

        </Container>
        
    );
}

export default Skills;