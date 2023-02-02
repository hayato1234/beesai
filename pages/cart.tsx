import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Loading } from "../components/Loading";
import { useGetCartQuery } from "../redux/user";
import { CartItemType } from "../types/items";

const CartItemList = ({ items }: { items: CartItemType[] }) => {
  return (
    <>
      {items.map((item: any) => {
        return (
          <Row key={item._id}>
            <Col>
              <p>{item.item_id}</p>
            </Col>
            <Col>
              <img
                style={{ width: "100px", height: "auto" }}
                src={item.thumbnail}
                alt="thumbnail"
              />
            </Col>
            <Col>
              <h3>price {item.price_each}</h3>
            </Col>
            <Col>
              <h4>x {item.quantity}</h4>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

function Cart() {
  const { data, error, isLoading } = useGetCartQuery({
    refetchOnMountOrArgChange: true,
  });
  if (error) return <h1>{error}</h1>;

  let items: CartItemType[] = data?.data?.items;

  return (
    <Container>
      {isLoading ? <Loading /> : items && <CartItemList items={items} />}
    </Container>
  );
}

export default Cart;
