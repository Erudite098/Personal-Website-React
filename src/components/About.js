import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function About() {
    return (
       <Container className='p-5 text-center'> 
           <h1>About Me</h1>
           <p>
                I’m Zania, a 3rd-year computer science student at the University of Cabuyao, 
                focusing on web development and IoT. I’ve always had a passion for technology 
                and love creating solutions that can have a real-world impact. I’ve shifted from 
                game development to web development, where I’m building apps like a task management 
                system and a messenger bot for students. My journey has been exciting, but lately, 
                I’ve been feeling tired and unsure of my skills. The workload is overwhelming, and 
                exhaustion sometimes makes me doubt whether I can keep going. Still, I remind myself 
                that every challenge is an opportunity for growth. It’s okay to feel uncertain, 
                but I know that perseverance and dedication will carry me through. I’ve come this far, 
                and I’m capable of reaching my goals—even if the path feels difficult now.
           </p>
       </Container>
    );
}

export default About;