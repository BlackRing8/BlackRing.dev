import proj1 from "../assets/img/porto1.png";
import proj3 from "../assets/img/porto4.png";
import proj4 from "../assets/img/porto5.png";
import design1 from "../assets/design/logo1.png";
import design2 from "../assets/design/logo1-2.png";
import design3 from "../assets/design/logo2.png";
import design4 from "../assets/design/logo3.png";
import design5 from "../assets/design/logo4.png";
import design6 from "../assets/design/kz2-01.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { ProjectCard } from "./ProjectCard";
import { ProjectDesign } from "./ProjectDesign";
import TrackVisibility from "react-on-screen";
import "animate.css";
import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

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

  const design = [
    {
      Nama: "Logo-16124",
      designUrl: design6,
      urlDesign: "https://www.instagram.com/p/C2KsD_OyUtn/",
    },
    {
      Nama: "Logo-1978",
      designUrl: design1,
      urlDesign: "https://www.instagram.com/p/C2CNUcfBpBP/",
    },
    {
      Nama: "Logo-1978",
      designUrl: design2,
      urlDesign: "https://www.instagram.com/p/C2CNl8HBhwj/",
    },
    {
      Nama: "Logo-1979",
      designUrl: design3,
      urlDesign: "https://www.instagram.com/p/C2CM-y5hxit/",
    },
    {
      Nama: "Logo-1980",
      designUrl: design4,
      urlDesign: "https://www.instagram.com/p/C2CQbANh0EP/",
    },
    {
      Nama: "Logo-15124",
      designUrl: design5,
      urlDesign: "https://www.instagram.com/p/C2HmmXUy5Rn/",
    },
  ];

  return (
    <section className="project" id="portofolio">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h2>Portofolio</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Row>
                          {projek.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </AnimationOnScroll>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Row>
                          {design.map((design, index) => {
                            return <ProjectDesign key={index} {...design} />;
                          })}
                        </Row>
                      </AnimationOnScroll>
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
};
