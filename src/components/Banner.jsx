import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg2 from "../assets/img/astronot-animasi2.svg";
import headerImg from "../assets/img/poto.png";
import { useState, useEffect } from "react";
import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "animate.css/animate.min.css";

export const Banner = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const phrases = ["FrontEnd Web Dev"];
  const phrases2 = ["Graphic Designer"];

  const [curPhraseIndex, setCurPhraseIndex] = useState(0);
  const [curWord, setCurWord] = useState("");

  const sleepTime = 30;
  const sleepTime2 = 150;

  useEffect(() => {
    const writeLoop = async () => {
      while (true) {
        let i = 0;
        let curWord = phrases[curPhraseIndex];
        let curWord2 = phrases2[curPhraseIndex];

        await sleep(sleepTime * 110);

        while (i < curWord.length) {
          setCurWord(curWord.substring(0, i + 1));
          await sleep(sleepTime2);
          i++;
        }

        await sleep(sleepTime * 20);

        while (i > 0) {
          setCurWord(curWord.substring(0, i - 1));
          await sleep(sleepTime2);
          i--;
        }

        await sleep(sleepTime * 20);

        while (i < curWord2.length) {
          setCurWord(curWord2.substring(0, i + 1));
          await sleep(sleepTime2);
          i++;
        }

        await sleep(sleepTime * 20);

        while (i > 0) {
          setCurWord(curWord2.substring(0, i - 1));
          await sleep(sleepTime2);
          i--;
        }
      }
    };

    writeLoop();
  }, [curPhraseIndex]);

  return (
    <section className="banner items-center" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible}>
                  <h1>
                    {"Hi I'm Gilang Prakoso "}
                    <br></br>
                    <span className="wrap" id="el">
                      {curWord}
                    </span>
                    <span className="cursor">|</span>
                  </h1>
                  <p>My background is as an information systems student at a university in Indonesia, Nice to meet you.</p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />{" "}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible}>
                  <img src={headerImg} alt="header img" className="rounded-3xl lg:rounded-full mt-3 lg:mt-0" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
