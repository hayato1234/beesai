import React from "react";
import { Loading } from "../components/Loading";
import { useGetCartQuery } from "../redux/product";
import { CartItemType } from "../types/items";

const CartItemList = ({ items }: { items: CartItemType[] }) => {
  return (
    <>
      {items.map((item: any) => {
        return (
          <div key={item._id}>
            <h1>{item.item_id}</h1>
            <img src={item.thumbnail} alt="thumbnail" />
            <h3>price {item.price_each}</h3>
            <h4>x {item.quantity}</h4>
          </div>
        );
      })}
    </>
  );
};

function Cart() {
  const { data, error, isLoading } = useGetCartQuery("");
  if (error) return <h1>{error}</h1>;

  let items: CartItemType[] = data?.data?.items;

  return (
    <>{isLoading ? <Loading /> : items && <CartItemList items={items} />}</>
  );
}

export async function getCart() {
  if (typeof window !== "undefined") {
    try {
      const bearer = "Bearer " + localStorage.getItem("token");
      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: bearer },
        credentials: "same-origin",
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default Cart;
