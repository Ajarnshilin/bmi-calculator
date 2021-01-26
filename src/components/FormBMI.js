import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  ToggleButton
} from "react-bootstrap";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import ActionContex from "./../context/ActionContext";
import Header from "../components/Header";

function FormBMI() {
  const ranges = (resultCal) => {
    if (resultCal < 18.5) {
      return 1;
    } else if (resultCal >= 18.5 && resultCal < 24.5) {
      return 2;
    } else if (resultCal >= 24.5 && resultCal < 29.9) {
      return 3;
    } else {
      return 4;
    }
  };

  const [item, setItem] = useState({ gender: "" });

  const { gender } = item;

  const { statusValue, resultValue, yourBMI } = useContext(ActionContex);
  const [BMI, setBMI] = yourBMI;
  const [status, setStatus] = statusValue;
  const [result, setResult] = resultValue;

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      gender: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    if (weight > 0 && height > 0 && gender !== "") {
      let total = weight / (height / 100) ** 2;
      total = total.toFixed(2);

      if (gender === "male") {
        setBMI(total - 1);
        setResult(ranges(total - 1));
        setStatus(2);
      } else {
        setBMI(total);
        setResult(ranges(total));
        setStatus(2);
      }
    } else {
      alert("Please enter all field correctly");
    }
  };

  return (
    <>
      <Header>BMI Calculator</Header>
      <Form onSubmit={handleSubmit}>
        <Row className="row-between">
          <Col className="col-left" align="center">
            <ToggleButton
              className="btn-small"
              variant="outline-secondary"
              value="male"
              type="radio"
              onChange={handleChange}
              checked={gender === "male"}
              autocomplete="off"
            >
              <Row className="row-icon">
                <Col>
                  <FontAwesomeIcon
                    className="fa-male"
                    icon={faMale}
                    size="3x"
                  />
                </Col>
              </Row>
              <Row>
                <Col>Male</Col>
              </Row>
            </ToggleButton>
          </Col>
          <Col className="col-right" align="center">
            <ToggleButton
              className="btn-small"
              variant="outline-secondary"
              value="female"
              type="radio"
              onChange={handleChange}
              checked={gender === "female"}
              autocomplete="off"
            >
              <Row className="row-icon">
                <Col>
                  <FontAwesomeIcon
                    className="fa-female"
                    icon={faFemale}
                    size="3x"
                  />
                </Col>
              </Row>
              <Row>
                <Col>Female</Col>
              </Row>
            </ToggleButton>
          </Col>
        </Row>
        <Row className="row-bottom">
          <Col align="center">
            <Container className="container-input">
              <Form.Control
                className="input"
                size="lg"
                type="number"
                placeholder="195"
                onChange={(e) => setHeight(e.target.value)}
              />
              Height (in cm)
            </Container>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Container className="container-input">
              <Form.Control
                className="input"
                size="lg"
                type="number"
                placeholder="80"
                onChange={(e) => setWeight(e.target.value)}
              />
              Weight (in kgs)
            </Container>
          </Col>
        </Row>
        <Container className="container-submit">
          <Button
            className="btn-submit"
            variant="outline-primary"
            type="submit"
          >
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
}
export default FormBMI;
