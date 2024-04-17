import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { sliders } from "./sliders";

export const Banner: React.FunctionComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === sliders.length - 1 ? 0 : prevSlide + 1
      );
    }, 9500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container ">
          {sliders.map((slide, index) => (
            <div
              key={index}
              className={`slider-item ${
                index === currentSlide ? "fadeIn" : "fadeOut"
              }`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <Image
                className="banner-img"
                width={1000}
                height={1000}
                src={slide.image}
                alt={`banner img ${index + 1}`}
              />
              <div className="banner-content">
                <p className="banner-subtitle">{slide.subtitle}</p>
                <h2 className="banner-title">{slide.title}</h2>
                {slide.text && (
                  <p className="banner-text">
                    {slide.text} <b>399</b>.00
                  </p>
                )}
                <Link href={slide.link}>
                  <span className="banner-btn">{slide.buttonText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
