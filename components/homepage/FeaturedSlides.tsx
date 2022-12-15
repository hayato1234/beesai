import React from "react";
import Slider from "react-slick";

type props = {
  className: string | null;
  style: React.CSSProperties | null;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
};

const SliderArrow = (props: any) => {
  const { className, style, onClick } = props;
  //   console.log(className);
  return (
    <div
      className={`${className} slider-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

function FeaturedSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // PrevArrow: <MyPrevArrow />,
    // infinite: true,
    // arrows: true,
    // prevArrow:
    //   "<button type='button' class='heroSliderArrow prevArrow tf-ion-chevron-left'></button>",
    // nextArrow:
    //   "<button type='button' class='heroSliderArrow nextArrow tf-ion-chevron-right'></button>",
    // dots: true,
    // autoplaySpeed: 7000,
    // pauseOnFocus: false,
    // pauseOnHover: false,
  };
  return (
    <>
      <div className="slider-container">
        <Slider
          {...settings}
          prevArrow={<SliderArrow />}
          nextArrow={<SliderArrow />}
        >
          <div className="container-fluid d-flex mx-auto">
            <div
              className="slider-item th-fullpage hero-area"
              style={{
                backgroundImage: "url(assets/images/slider/slider-1.jpg)",
              }}
            >
              <div className="slider-content">
                <div className="row mx-auto">
                  <div className="col-lg-8 text-center">
                    <p
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".1"
                    >
                      PRODUCTS
                    </p>
                    <h1
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".5"
                    >
                      The beauty of nature <br />
                      is hidden in details.
                    </h1>
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="shop.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex mx-auto">
            <div
              className="slider-item th-fullpage hero-area"
              style={{
                backgroundImage: "url(assets/images/slider/slider-2.jpg)",
              }}
            >
              <div className="slider-content">
                <div className="row mx-auto">
                  <div className="col-lg-8 text-center">
                    <p
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".1"
                    >
                      PRODUCTS
                    </p>
                    <h1
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".5"
                    >
                      The beauty of nature <br />
                      is hidden in details.
                    </h1>
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="shop.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex mx-auto">
            <div
              className="slider-item th-fullpage hero-area"
              style={{
                backgroundImage: "url(assets/images/slider/slider-3.jpg)",
              }}
            >
              <div className="slider-content">
                <div className="row mx-auto">
                  <div className="col-lg-8 text-center">
                    <p
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".1"
                    >
                      PRODUCTS
                    </p>
                    <h1
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".5"
                    >
                      The beauty of nature <br />
                      is hidden in details.
                    </h1>
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="shop.html"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default FeaturedSlides;
