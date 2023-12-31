import proj1 from '../assets/img/porto1.png';
import proj3 from '../assets/img/porto4.png';
import proj4 from '../assets/img/porto5.png';
import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Project = () => {
    const projek = [
        {
            Judul: "Web Pitching festival",
            desc: "Development & Design",
            imgUrl: proj1,
            urlProj: "https://pitchingfest.id/",
        },
        {
            Judul: "Organization Web",
            desc: "Development & Design",
            imgUrl: proj4,
            urlProj: "https://blackring8.github.io/Karang-Taruna-03/",
        },
        {
            Judul: "Personal Website",
            desc: "Development & Design",
            imgUrl: proj3,
            urlProj: "https://blackring8.github.io/GilangPrakoso-Profile/",
        },
    ];
    
    return(
        <section className='project' id='portofolio'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            <AnimationOnScroll animateIn='animate__fadeIn'>
                            <h2>Portofolio</h2>
                        <p></p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Website</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Design Poster</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <AnimationOnScroll animateIn='animate__fadeInUp'>
                                    <Row>
                                        
                                            {
                                        projek.map((project, index) => {
                                            return (
                                            
                                            <ProjectCard key={index}
                                            {...project}/>
                                            )
                                        })
                                        }
                                        
                                        
                                    </Row>
                                </AnimationOnScroll>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <p>Coming Soon.</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                            </AnimationOnScroll>
                        </TrackVisibility> 
                    </Col>
                </Row>
            </Container>
        </section>
    );
}