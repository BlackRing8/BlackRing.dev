import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState('false');


    useEffect (() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

  return  (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
          <Nav href="#home" className='tulisan-logo font-bold'>BlackRing.dev</Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#portofolio" className={activeLink === 'portofolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portofolio')}>Portofolio</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/gilangprakoso/"><img src={navIcon1} alt='linkedin'/></a>
                <a href="https://www.instagram.com/blackring.dev/"><img src={navIcon3} alt='ig'/></a>
                <a href="https://github.com/BlackRing8"><img src={navIcon2} alt='git'/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}