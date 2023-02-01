import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
} from "reactstrap";
import { ItemType } from "../types/items";

function ShopItemCard({ item }: { item: ItemType }) {
  return (
    <Card>
      <img src={item.image} alt={item.imageAlt} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ShopItemCard;
