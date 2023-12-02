import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gambar1 from '../assets/logo/JavaScript_Logo.png';
import gambar2 from '../assets/logo/tailwindcss-logo.jpg';
import gambar3 from '../assets/logo/capcut-logo-1.png';
import gambar4 from '../assets/logo/Ai-logo.png';
import gambar5 from '../assets/logo/canva-logo.png';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx py-6 mt-10 px-auto'>
                            <h2>Skills & Tools</h2>
                            <p>Skills and tools that I can use in developing a website</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={gambar1} alt='image' />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={gambar2} alt='image' />
                                    <h5>UI TailwindCSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={gambar3} alt='image' />
                                    <h5>Capcut Video Editing</h5>
                                </div>
                                <div className='item'>
                                    <img src={gambar4} alt='image' />
                                    <h5>Adobe illustrator</h5>
                                </div>
                                <div className='item'>
                                    <img src={gambar5} alt='image' />
                                    <h5>Design Canva</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}></img>
        </section>
    );
}