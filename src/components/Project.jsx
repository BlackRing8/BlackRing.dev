import proj1 from '../assets/img/porto1.png';
import proj2 from '../assets/img/porto2.png';
import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';


export const Project = () => {
    const projek = [
        {
            Judul: "Web Event Pitching festival",
            desc: "Development & Design",
            imgUrl: proj1,
        },
        {
            Judul: "Web Gallery art",
            desc: "Development & Design",
            imgUrl: proj2,
        },
    ];
    
    return(
        <section className='project' id='portofolio'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        <h2>Portofolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint officia deleniti fuga voluptate eaque sit beatae vitae, debitis aperiam eos. Reprehenderit beatae at praesentium ducimus officia amet porro debitis eligendi.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                            <Tab.Pane eventKey="third">
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