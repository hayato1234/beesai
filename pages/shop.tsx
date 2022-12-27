import React from "react";
import { Col, Container, Row } from "reactstrap";
import ShopItemCard from "../components/ShopItemCard";
import { ItemType } from "../types/items";

function Shop() {
  const items: ItemType[] = [
    {
      title: "Glasses",
      image: "assets/images/shop/cart/cart-1.jpg",
      imageAlt: "glasses",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.",
    },
    {
      title: "Glasses",
      image: "assets/images/shop/cart/cart-1.jpg",
      imageAlt: "glasses",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.",
    },
    {
      title: "Glasses",
      image: "assets/images/shop/cart/cart-1.jpg",
      imageAlt: "glasses",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.",
    },
  ];
  return (
    <Container>
      <Row>
        {items.map((item, index) => {
          return (
            <Col key={index} md="4">
              <ShopItemCard item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Shop;
