import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    const searchQuery = query.get("q") || "";
    console.log(searchQuery);

    //let url = `http://localhost:3004/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/<your-username>/<your-repo>/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]); //배열이 비어있을때는 ProductAll이 실행될때 한번만 실행됨

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => {
            return (
              <Col lg={3} key={menu.id}>
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
