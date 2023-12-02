import proj1 from '../assets/img/porto1.png';
import proj2 from '../assets/img/porto2.png';
import proj3 from '../assets/img/porto4.png';
import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Project = () => {
    const projek = [
        {
            Judul: "Web Event Pitching festival",
            desc: "Development & Design",
            imgUrl: proj1,
            urlProj: "https://pitchingfest.id/",
        },
        {
            Judul: "Web Gallery art",
            desc: "Development & Design",
            imgUrl: proj2,
            urlProj: "https://blackring8.github.io/YourUniverse.id/",
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </TrackVisibility> 
                    </Col>
                </Row>
            </Container>
        </section>
    );
}