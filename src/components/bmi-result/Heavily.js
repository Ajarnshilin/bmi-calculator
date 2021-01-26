import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Image } from "react-bootstrap";
import "../../styles.css";
import Img from "../../assets/heavily-overweight.png";

function Normal() {
  return (
    <Container>
      <Row>
        <Col align="center" xs={4}>
          <Image src={Img} fluid />
        </Col>
        <Col className="result-text">
          A BMI of 18.5-24.9 indicates that you are at a healthy weight for your
          height. By maintaining a healthy weight, you lower your risk of
          developing serious health problems.
        </Col>
      </Row>
    </Container>
  );
}
export default Normal;
