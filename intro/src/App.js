import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let productInfo = { title: "ProductList" };
  let categoryInfo = { title: "CateforyList" };
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
