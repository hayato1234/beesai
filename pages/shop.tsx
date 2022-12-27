import React from "react";
import dbConnect from "../lib/dbConnect";
import Item from "../models/item";
import { Col, Container, Row } from "reactstrap";
import { ItemType } from "../types/items";
import ShopItemCard from "../components/ShopItemCard";

function Shop({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Row>
        {items &&
          items.map((item: any, index: number) => {
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

export async function getServerSideProps() {
  await dbConnect();
  const result = await Item.find({});
  // console.log(result);
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });
  return { props: { items: items } };
}

export default Shop;
