import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles.css";
import Normal from "./bmi-result/Normal";
import Overweight from "./bmi-result/Overweight";
import Underweight from "./bmi-result/Underweight";
import Heavily from "./bmi-result/Heavily";
import ActionContext from "../context/ActionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Result() {
  const { statusValue, resultValue, yourBMI } = useContext(ActionContext);

  const [BMI, setBMI] = yourBMI;
  const [status, setStatus] = statusValue;
  const [result, setResult] = resultValue;

  function selectContent(result) {
    switch (result) {
      case 1:
        return <Underweight />;
      case 2:
        return <Normal />;
      case 3:
        return <Overweight />;
      case 4:
        return <Heavily />;
      default:
        return null;
    }
  }

  return (
    <>
      <Container className="container-result-page">
        <FontAwesomeIcon
          className="fa-arrow-left"
          icon={faArrowLeft}
          size="1x"
          onClick={() => setStatus(1)}
        />
      </Container>
      <Container className="container-result">
        <Row>
          <Col align="center">
            <Container className="container-result-box">
              <div class="multicolor-bar">
                <Row>
                  <Col className="col-bmi-header">Your BMI is</Col>
                </Row>
                <Row>
                  <Col className="col-result">{BMI}</Col>
                </Row>
              </div>
            </Container>
          </Col>
        </Row>
        {result !== 0 ? selectContent(result) : null}
      </Container>
    </>
  );
}
export default Result;
