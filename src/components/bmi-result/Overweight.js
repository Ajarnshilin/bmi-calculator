import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Image } from "react-bootstrap";
import "../../styles.css";
import Img from "../../assets/overweight.png";

function Overweight() {
  return (
    <Container>
      <Row>
        <Col align="center" xs={4}>
          <Image src={Img} fluid />
        </Col>
        <Col className="result-text">
          A BMI of 25-29.9 indicates that you are slightly overweight. You may
          be advised to lose some weight for health reasons. You are recommended
          to talk to your doctor or a dietitian for advice.
        </Col>
      </Row>
    </Container>
  );
}
export default Overweight;
