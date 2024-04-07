import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "../data.json";

function Features(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const { coupons } = data;
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const rows = [];
    for (let i = 0; i < coupons.length; i += 3) {
      const row = coupons.slice(i, i + 3).map((coupon, idx) => (
        <a href={coupon.href} className="slider-card" key={coupon.src + idx}>
          <img src={coupon.src} alt={""} />
          <div className="coupon-count">
            <p>{coupon.count} Coupons</p>
          </div>
        </a>
      ));
      rows.push(row);
    }
    setSlides(rows);
  }, []);

  return (
    <div className="featured-section">
      <div className="featured-head">
        <h3>FEATURED STORES</h3>
        <a href="https://zoutons.com/stores">VIEW ALL STORES</a>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slider-item" key={index}>
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Features;
