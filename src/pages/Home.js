import React, { useContext } from "react";
import FormBMI from "../components/FormBMI";
import { Container } from "react-bootstrap";
import Result from "../components/Result";
import ActionContext from "./../context/ActionContext";

function pageChange(status) {
  switch (status) {
    case 1:
      return <FormBMI />;
    case 2:
      return <Result />;
    default:
      return <FormBMI />;
  }
}

function Home() {
  const { statusValue, resultValue } = useContext(ActionContext);
  const [status, setStatus] = statusValue;
  return (
    <Container className="container-whole">{pageChange(status)}</Container>
  );
}
export default Home;
