import React from "react";
import { Container } from "../components/Container";
// import Breadcrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";
import Breadcrumb from '../components/Breadcrumb';

const MyCart = () => {
  return (
    <Container className="flex-grow">
      <Breadcrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
