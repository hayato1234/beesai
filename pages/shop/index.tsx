import React from "react";
import dbConnect from "../../lib/dbConnect";
import Item from "../../models/item";
import { Col, Container, Row } from "reactstrap";
import { ItemType } from "../../types/items";
import ShopItemCard from "../../components/ShopItemCard";
import Link from "next/link";

function Shop({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Row>
        {items &&
          items.map((item, index) => {
            return (
              <Col key={index} md="4">
                <Link href={`shop/${item._id}`}>
                  <ShopItemCard item={item} />
                </Link>
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
    item.createdAt = item.createdAt.toString();
    item.updatedAt = item.updatedAt.toString();
    item._id = item._id.toString();
    return item;
  });
  return { props: { items: items } };
}

export default Shop;
