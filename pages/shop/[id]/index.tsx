import React, { useState } from "react";
import dbConnect from "../../../lib/dbConnect";
import { Button, Col, Container, Row } from "reactstrap";

import Item from "../../../models/item";
import { ItemType } from "../../../types/items";
import { useAddToCartMutation } from "../../../redux/user";

function ItemDetail({ item }: { item: ItemType }) {
  const [addToCart, response] = useAddToCartMutation();
  // console.log(response);
  const [addedMessage, setAddedMessage] = useState("");
  const handleAddCart = async () => {
    const newCartItem = {
      item_id: item._id,
      quantity: 1,
      price_each: item.price,
      thumbnail: item.image,
    };
    try {
      await addToCart(newCartItem).unwrap();

      setAddedMessage(`${item.title} is added to cart`);
    } catch (e) {
      console.log("Failed to add cart", e);
    }
  };
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" md="5" lg="6">
          <img src={item.image} alt={item.imageAlt} />
        </Col>
        <Col className="ms-auto" md="5" lg="6">
          <h1>{item.title}</h1>
          <h2>$ {item.price}</h2>
          <p>{item.description}</p>
          <h6>Shipping</h6>
          <p>Free shipping</p>
          <Button onClick={handleAddCart}>Add to Cart</Button>
          {addedMessage && <p>{addedMessage}</p>}
          <hr />
          <h6>Specification</h6>
          <p>{item.dimensionInch}</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <h1>Related Products</h1>
        <Col className="p-3" xs="6" md="3">
          <img style={{ width: "100%" }} src={item.image} alt={item.imageAlt} />
        </Col>
        <Col className="p-3" xs="6" md="3">
          <img style={{ width: "100%" }} src={item.image} alt={item.imageAlt} />
        </Col>
        <Col className="p-3" xs="6" md="3">
          <img style={{ width: "100%" }} src={item.image} alt={item.imageAlt} />
        </Col>
        <Col className="p-3" xs="6" md="3">
          <img style={{ width: "100%" }} src={item.image} alt={item.imageAlt} />
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  await dbConnect();
  const item = await Item.findById(params.id).lean();
  item.createdAt = item.createdAt.toString();
  item.updatedAt = item.updatedAt.toString();
  item._id = item._id.toString();
  return { props: { item } };
}

export default ItemDetail;
