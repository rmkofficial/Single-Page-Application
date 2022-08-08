import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let titleProdouct = "Product List";
  let titleCategory = "Category List";
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title={titleProdouct}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
