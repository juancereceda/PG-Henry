import React, { useEffect, useState, useRef } from "react";
import { StyledSlider, SliderImg, SliderText } from "./styledSlider";
import axios from "axios";

const Slider = () => {
  const [comboList, setComboList] = useState([]);

  const SlideImages = useRef(null);

  async function GetProducts() {
    let ListaCombos = await axios
      .get("http://localhost:3001/products")
      .then((response) => response.data);
    setComboList(ListaCombos.filter((producto) => producto.combo));
  }

  useEffect(() => {
    GetProducts();
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
      {comboList.length > 0
        ? comboList.map((combo) => {
            return (
              <div key={combo._id}>
                <SliderImg src={combo.imgUrl} alt="" />
                <SliderText>
                  <p>{combo.name}</p>
                </SliderText>
              </div>
            );
          })
        : null}
    </StyledSlider>
  );
};

export default Slider;
