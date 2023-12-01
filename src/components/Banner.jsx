import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import React from 'react';

export const Banner = () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const phrases = ["FrontEnd Web Developer"];
  
    const [curPhraseIndex, setCurPhraseIndex] = useState(0);
    const [curWord, setCurWord] = useState('');
  
    const sleepTime = 30;
    const sleepTime2 = 150;

    useEffect(() => {
        const writeLoop = async () => {
        while (true) {
            let i = 0;
            let curWord = phrases[curPhraseIndex];

            while (i < curWord.length) {
            setCurWord(curWord.substring(0, i + 1));
            await sleep(sleepTime2);
            i++;
            }

            await sleep(sleepTime * 100);

            while (i > 0) {
            setCurWord(curWord.substring(0, i - 1));
            await sleep(sleepTime2);
            i--;
            }

            await sleep(sleepTime * 20);
        }
        };

        writeLoop();
    }, [curPhraseIndex]);

    return (
        <section className="banner sm:pt-44" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my portofolio</span>
                        <h1>{"Hi I'm BlackRing "}<br></br><span className="wrap" id='el'>{curWord}</span><span className='cursor'>|</span></h1>
                        <p>Lorem aksj ksajdl ksakj iije owpaojs jingse mangsungs diklao ksalji heapw azable munaco siapa daya </p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}