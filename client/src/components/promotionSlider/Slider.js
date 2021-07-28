import React, { useEffect, useState, useRef } from "react";
import { StyledSlider, SliderImg } from "../comboSlider/styledSlider";
import axios from "axios";

const Slider = () => {
  const [discounts, setDiscounts] = useState([
    "https://res.cloudinary.com/juancereceda/image/upload/v1627409615/Nuevo_proyecto_2_tsdhhf.png",
  ]);

  const SlideImages = useRef(null);

  async function getCoupons() {
    let list = await axios.get("http://localhost:3001/coupons");
    setDiscounts([...discounts, ...list.data.map((coupon) => coupon.image)]);
    console.log(discounts);
  }

  useEffect(() => {
    getCoupons();
    const interval = setInterval(SlideAnimation, 3000);
    return () => clearInterval(interval);
  }, [SlideImages]);

  function SlideAnimation() {
    if (
      SlideImages &&
      SlideImages.current &&
      SlideImages.current.children.length > 1
    ) {
      const elementoActual = SlideImages.current.children[0];
      SlideImages.current.style.transition = `1000ms ease-out all`;
      const tamañoSlide = SlideImages.current.children[0].offsetWidth;
      SlideImages.current.style.transform = `translateX(-${
        tamañoSlide + 50
      }px)`;
      const transition = () => {
        SlideImages.current.style.transition = "none";
        SlideImages.current.style.transform = "translateX(0)";
        SlideImages.current.appendChild(elementoActual);
        SlideImages.current.removeEventListener("transitionend", transition);
      };
      SlideImages.current.addEventListener("transitionend", transition);
    }
  }

  return (
    <StyledSlider ref={SlideImages}>
      {discounts.length > 0
        ? discounts.map((coupon) => {
            return (
              <div key={discounts.indexOf(coupon)}>
                <SliderImg src={coupon} alt="" className="coupons" />
              </div>
            );
          })
        : null}
    </StyledSlider>
  );
};

export default Slider;
