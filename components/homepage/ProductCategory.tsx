import React from "react";

function ProductCategory() {
  return (
    <section className="product-category section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Product Category</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="category-box">
              <a href="#!">
                <img
                  src="./assets/images/shop/category/category-1.jpg"
                  alt=""
                />
                <div className="content">
                  <h3>Clothes Sales</h3>
                  <p>Shop New Season Clothing</p>
                </div>
              </a>
            </div>
            <div className="category-box">
              <a href="#!">
                <img
                  src="./assets/images/shop/category/category-2.jpg"
                  alt=""
                />
                <div className="content">
                  <h3>Smart Casuals</h3>
                  <p>Get Wide Range Selection</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="category-box category-box-2">
              <a href="#!">
                <img
                  src="./assets/images/shop/category/category-3.jpg"
                  alt=""
                />
                <div className="content">
                  <h3>Jewellery</h3>
                  <p>Special Design Comes First</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;
