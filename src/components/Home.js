import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function Home() {
    return (
        <Container className="p-5 text-center">
            <h1>Welcome to My Profile!</h1>
            <p> 
                My career goal is to become a highly skilled web developer, with a growing interest in IoT. 
                I'm dedicated to building innovative and impactful web applications that address real-world needs, 
                particularly in areas like education and business solutions. By honing my skills in front-end and 
                back-end development, using technologies like PHP, React, and jQuery, I aim to create efficient, 
                user-friendly systems. I also envision integrating IoT in my future projects, leveraging 
                technology to create seamless, connected experiences. Through continuous learning and hands-on projects, 
                I plan to contribute meaningfully to the tech industry.
                I actually didn't want to stay longer in the industry. I prefer more
                on starting my own business. But right  now,  I am still learning and upskilling
                since the competition is getting higher.
            </p>
        </Container>
    );
}

export default Home;