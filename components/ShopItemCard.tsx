import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { ItemType } from "../types/items";

function ShopItemCard({ item }: { item: ItemType }) {
  return (
    <Card>
      <img src={item.image} alt={item.imageAlt} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
    </Card>
  );
}

export default ShopItemCard;
