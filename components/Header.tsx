import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
const styles = require("../styles/Header.module.scss");

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  ModalHeader,
} from "reactstrap";
import { CartItemType } from "../types/items";
import { useGetCartQuery } from "../redux/user";
import { Loading } from "./Loading";
import { formatterUSD } from "../util/item";

const CartItemList = ({ items }: { items: CartItemType[] }) => {
  return (
    <>
      {items.map((item) => {
        const { quantity, price_each } = item;
        return (
          <div className="d-flex cart-content" key={item.item_id}>
            <Link href="/cart">
              <img src={item.thumbnail} alt="item thumbnail" />
            </Link>
            <div className="item-info me-auto">
              <h6>
                <a href="#!" className="cart-title">
                  {item.item_id}
                </a>
              </h6>

              <p>
                {quantity} x ${formatterUSD.format(+price_each)}
              </p>
              <p>
                <strong>{formatterUSD.format(+quantity * +price_each)}</strong>
              </p>
            </div>
            <a href="#!" className="remove">
              <Icon icon="carbon:close" />
            </a>
          </div>
        );
      })}
    </>
  );
};

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { data, error, isLoading } = useGetCartQuery({
    refetchOnMountOrArgChange: true,
  });
  let items: CartItemType[] = data?.data?.items;

  const toggleCart = () => setCartOpen((prevState) => !prevState);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleLoginModal = () => setLoginModalOpen((prevState) => !prevState);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    // console.log("Hello");
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      username: form.loginEmail.value,
      password: form.loginPassword.value,
    };
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    // console.log(res.status);
    // console.log(res.json());

    if (res.status === 200) {
      const jsonData = await res.json();
      if (jsonData.success) {
        localStorage.setItem("token", jsonData.token);
        // console.log(localStorage.getItem("token"));
      }
    }

    toggleLoginModal();
  };

  return (
    <>
      {/* <!-- Header Section --> */}
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>0129-12323-123123</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              {/* <!-- Site Logo --> */}
              <div className="logo text-center">
                <Link href="/">
                  {/* <!-- replace logo here --> */}
                  <svg
                    width="135px"
                    height="29px"
                    viewBox="0 0 155 29"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      fontSize="40"
                      fontFamily="AustinBold, Austin"
                      fontWeight="bold"
                    >
                      <g
                        id="Group"
                        transform="translate(-108.000000, -297.000000)"
                        fill="#000000"
                      >
                        <text id="AVIATO">
                          <tspan x="108.94" y="325">
                            BeeSai
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col col-xs-12 col-sm-4">
              <ul className="top-menu text-right list-group list-group-horizontal">
                <Button color="primary" onClick={toggleLoginModal}>
                  Login
                </Button>

                {/* <!-- Languages --> */}
                <li className="commonSelect">
                  <select
                    defaultValue="EN"
                    className="form-select form-select-sm"
                  >
                    <option value="EN">EN</option>
                    <option value="JP">JP</option>
                  </select>
                </li>
                {/* <!-- / Languages --> */}
              </ul>
              {/* <!-- / .nav .navbar-nav .navbar-right --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Header Section --> */}

      {/* <!-- Custom Navbar Section --> */}
      <Navbar sticky="top" expand="sm">
        {/* <NavbarBrand className="ms-auto pb-2" href="/">
          Home
        </NavbarBrand> */}
        <NavbarToggler onClick={toggleNav} />
        <Collapse
          className="justify-content-center align-items-center"
          isOpen={isNavOpen}
          navbar
        >
          <Nav navbar>
            <NavItem className="dropdown dropdown-slide">
              <NavLink
                href="/shop"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="350"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop <span className="tf-ion-ios-arrow-down"></span>
              </NavLink>
              <div className="dropdown-menu">
                <div className="d-flex">
                  <ul>
                    <li className="dropdown-header">Pages</li>
                    <hr />
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="confirmation.html">Confirmation</a>
                    </li>
                  </ul>

                  {/* <!-- Layout --> */}

                  <ul>
                    <li className="dropdown-header">Layout</li>
                    <hr />
                    <li>
                      <a href="product-single.html">Product Details</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">Shop With Sidebar</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- / .dropdown-menu --> */}
            </NavItem>

            <NavItem className="dropdown full-width dropdown-slide">
              <NavLink
                href="/pages"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="350"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu">
                <div className="d-flex">
                  {/* <!-- Introduction --> */}
                  <ul>
                    <li className="dropdown-header">Introduction</li>
                    <hr />
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                  </ul>

                  {/* <!-- Contact --> */}

                  <ul>
                    <li className="dropdown-header">Dashboard</li>
                    <hr />
                    <li>
                      <a href="dashboard.html">User Interface</a>
                    </li>
                    <li>
                      <a href="order.html">Orders</a>
                    </li>
                    <li>
                      <a href="address.html">Address</a>
                    </li>
                    <li>
                      <a href="profile-details.html">Profile Details</a>
                    </li>
                  </ul>

                  {/* <!-- Utility --> */}

                  <ul>
                    <li className="dropdown-header">Utility</li>
                    <hr />
                    <li>
                      <a href="login.html">Login Page</a>
                    </li>
                    <li>
                      <a href="signin.html">Signin Page</a>
                    </li>
                    <li>
                      <a href="forget-password.html">Forget Password</a>
                    </li>
                  </ul>
                </div>

                {/* <!-- / .row --> */}
              </div>
              {/* <!-- / .dropdown-menu --> */}
            </NavItem>
            {/* <!-- / Pages --> */}

            {/* <!-- Blog --> */}
            <NavItem className="dropdown dropdown-slide">
              <NavLink
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="350"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-full-width.html">Blog Full Width</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog 2 Columns</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </NavItem>
            <NavItem className="dropdown dropdown-slide">
              <NavLink
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="350"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Elements
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            {/* <!-- Cart --> */}
            <NavItem>
              <Dropdown
                className="my-auto"
                isOpen={cartOpen}
                toggle={toggleCart}
                onMouseEnter={() => setCartOpen(true)}
                onMouseLeave={() => setCartOpen(false)}
              >
                <DropdownToggle>
                  <Icon icon="ion:cart" />
                  Cart
                </DropdownToggle>
                <DropdownMenu>
                  {isLoading ? (
                    <Loading />
                  ) : !items && error ? (
                    <p>Error loading your cart</p>
                  ) : items.length === 0 ? (
                    <p>Empty</p>
                  ) : (
                    <CartItemList items={items} />
                  )}

                  <div className="cart-summary d-flex">
                    <span className="ms-auto my-2">
                      Total{" "}
                      {items &&
                        formatterUSD.format(
                          +items.reduce(
                            (a, c) =>
                              a +
                              Number.parseInt(c.quantity) *
                                Number.parseInt(c.price_each),
                            0
                          )
                        )}
                    </span>
                  </div>

                  <ul className="row text-center cart-buttons">
                    <div className="col col-6">
                      <a
                        href="/cart"
                        className="btn btn-sm btn-dark view-button"
                      >
                        View Cart
                      </a>
                    </div>
                    <div className="col col-6">
                      <Link
                        href="/checkout"
                        className="btn btn-sm checkout-button"
                      >
                        Checkout
                      </Link>
                    </div>
                  </ul>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            {/* <!-- / Cart --> */}
          </Nav>

          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
      {/* <!-- Custom Navbar Section --> */}

      {/* <!-- login modal  --> */}
      <Modal isOpen={loginModalOpen} toggle={toggleLoginModal}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label className="sr-only col-form-label" htmlFor="loginEmail">
                Email Address
              </Label>
              <Input
                type="email"
                name="loginEmail"
                id="loginEmail"
                className="form-control form-control-sm"
                placeholder="Enter Email"
                required
              />
            </FormGroup>
            <FormGroup className="form-row">
              <div className="form-group col-12">
                <label
                  className="sr-only col-form-label"
                  htmlFor="loginPassward"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  id="loginPassword"
                  className="form-control form-control-sm"
                  placeholder="Password"
                  required
                />
              </div>
            </FormGroup>
            <FormGroup className="form-check">
              <label className="form-check-label">
                <Input
                  type="checkbox"
                  className="form-check-input"
                  name=""
                  id=""
                  value="checkedValue"
                />
                Remember me
              </label>
            </FormGroup>
            <FormGroup className="form-row">
              <Button
                type="button"
                className="btn btn-secondary btn-sm ml-auto"
                onClick={toggleLoginModal}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                id="loginBtn"
                className="btn btn-primary btn-sm ml-1"
                color="primary"
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <a className="btn btn-link btn-sm" href="#/" data-dismiss="modal">
            forgot your password?
          </a>
        </ModalFooter>
      </Modal>
      {/* <!-- login modal  --> */}
    </>
  );
}

export default Header;
