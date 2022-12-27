import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function Shop() {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img src="assets/images/shop/cart/cart-1.jpg" alt="glasses" />
        <CardBody>
          <CardTitle>Glasses</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a
            consequatur beatae nostrum, earum consequuntur? Eveniet consequatur
            ipsum dicta recusandae.
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default Shop;
