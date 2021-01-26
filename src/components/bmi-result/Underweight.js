import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container, Image } from "react-bootstrap";
import "../../styles.css";
import Img from "../../assets/underweight.png";

function Underweight() {
  return (
    <Container>
      <Row>
        <Col align="center" xs={4}>
          <Image src={Img} fluid />
        </Col>
        <Col className="result-text">
          A BMI of less than 18.5 indicates that you are underweight, so you may
          need to put on some weight. You are recommended to ask your doctor or
          a dietitian for advice.
        </Col>
      </Row>
    </Container>
  );
}
export default Underweight;
