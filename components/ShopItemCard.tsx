import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
} from "reactstrap";
import { ItemType } from "../types/items";
import { useAddToCartMutation } from "../redux/user";

function ShopItemCard({ item }: { item: ItemType }) {
  const [addToCart, response] = useAddToCartMutation();
  const [addedMessage, setAddedMessage] = useState("");
  const handleAddCart = async () => {
    const newCartItem = {
      item_id: "63ac8d94289def74ddc397a9",
      quantity: 1,
      price_each: 20,
      thumbnail: "/assets/images/shop/cart/cart-1.jpg",
    };
    try {
      await addToCart(newCartItem).unwrap();
      console.log(response);
      setAddedMessage(`${item.title} is added to cart`);
    } catch (e) {
      console.log("Failed to add cart", e);
    }
  };
  return (
    <Card>
      <img src={item.image} alt={item.imageAlt} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
      <CardFooter>
        <Button onClick={handleAddCart}>Add to Cart</Button>
        {addedMessage && <p>{addedMessage}</p>}
      </CardFooter>
    </Card>
  );
}

export default ShopItemCard;
