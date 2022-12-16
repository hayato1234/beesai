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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
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
                {/* <!-- Cart --> */}
                <li className="dropdown cart-nav dropdown-slide">
                  <a
                    href="#!"
                    role="button"
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <Icon icon="ion:cart" />
                    Cart
                  </a>
                  <div className="dropdown-menu cart-dropdown">
                    {/* <!-- Cart Item 1--> */}
                    <div className="d-flex cart-content">
                      <a className="flex-shrink-0" href="#!">
                        <img
                          src="/assets/images/shop/cart/cart-1.jpg"
                          alt="image"
                        />
                      </a>
                      <div className="ms-3">
                        <h4>
                          <a href="#!" className="cart-title">
                            Ladies Bag
                          </a>
                        </h4>
                        <div className="cart-price">
                          <span>1 x</span>
                          <span>1250.00</span>
                        </div>
                        <h5>
                          <strong>$1250.00</strong>
                        </h5>
                      </div>
                      <a href="#!" className="remove">
                        <Icon icon="carbon:close" />
                      </a>
                    </div>

                    {/* <!-- Cart Item 2--> */}
                    <div className="d-flex cart-content">
                      <a className="flex-shrink-0" href="#!">
                        <img
                          src="/assets/images/shop/cart/cart-2.jpg"
                          alt="image"
                        />
                      </a>
                      <div className="ms-3">
                        <h4>
                          <a href="#!" className="cart-title">
                            Ladies Bag
                          </a>
                        </h4>
                        <div className="cart-price">
                          <span>1 x</span>
                          <span>1250.00</span>
                        </div>
                        <h5>
                          <strong>$1250.00</strong>
                        </h5>
                      </div>
                      <a href="#!" className="remove">
                        <Icon icon="carbon:close" />
                      </a>
                    </div>
                    {/* <!-- / Cart Item --> */}

                    <div className="cart-summary d-flex">
                      <span className="ms-auto my-2">Total $1799.00</span>
                    </div>

                    <ul className="row text-center cart-button">
                      <div className="col col-6">
                        <a
                          href="cart.html"
                          className="btn btn-sm btn-dark view-button"
                        >
                          View Cart
                        </a>
                      </div>
                      <div className="col col-6">
                        <a
                          href="checkout.html"
                          className="btn btn-sm btn-outline-dark btn-solid-border"
                        >
                          Checkout
                        </a>
                      </div>
                    </ul>
                  </div>
                </li>
                {/* <!-- / Cart --> */}

                {/* <!-- Search --> */}
                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <Icon icon="ic:outline-search" /> Search
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </form>
                    </li>
                  </ul>
                </li>
                {/* <!-- / Search --> */}

                {/* <!-- Languages --> */}
                <li className="commonSelect">
                  <select className="form-select form-select-sm">
                    <option selected>EN</option>
                    <option>DE</option>
                    <option>FR</option>
                    <option>ES</option>
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
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="dropdown dropdown-slide">
              <NavLink
                href="https://github.com/reactstrap/reactstrap"
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
                <div className="row">
                  {/* <!-- Basic --> */}
                  <div className="col-lg-6 col-md-6 mb-sm-3">
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
                  </div>

                  {/* <!-- Layout --> */}
                  <div className="col-lg-6 col-md-6 mb-sm-3">
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
                {/* <!-- / .row --> */}
              </div>
              {/* <!-- / .dropdown-menu --> */}
            </NavItem>
            <NavItem className="dropdown full-width dropdown-slide">
              <NavLink
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
                <div className="row">
                  {/* <!-- Introduction --> */}
                  <div className="col-sm-3 col-xs-12">
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
                  </div>

                  {/* <!-- Contact --> */}
                  <div className="col-sm-3 col-xs-12">
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
                  </div>

                  {/* <!-- Utility --> */}
                  <div className="col-sm-3 col-xs-12">
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

                  {/* <!-- Mega Menu --> */}
                  {/* <div className="col-sm-3 col-xs-12">
                      <a href="shop.html">
                        <img
                          className="img-responsive"
                          src="images/shop/header-img.jpg"
                          alt="menu image"
                        />
                      </a>
                    </div> */}
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
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>

      {/* <!-- Custom Navbar Section --> */}
    </div>
  );
}

export default Header;
