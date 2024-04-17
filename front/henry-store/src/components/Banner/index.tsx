import React from "react";
import "./style.css";


export const Banner:React.FunctionComponent = ()=>{

    return(
        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <img className="banner-img" src="https://www.apple.com/v/watchos/watchos-9/j/images/meta/watchos__bs5dwdte15xy_og.png" alt="banner img 1" />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>
                  <h2 className="banner-title">The latest Apple accessories</h2>
                  <p className="banner-text">
                    starting at us$; <b>399</b>.00
                  </p>
                  <a href="#" className="banner-btn">Shop now</a>
                </div>
              </div>
              <div className="slider-item">
              <img className="banner-img" src="https://miro.medium.com/v2/resize:fit:1400/1*rUbUcXf-7tli24BhMR6R1A.png" alt="banner img 2" />
                <div className="banner-content">
                  <p className="banner-subtitle">Software</p>
                  <h2 className="banner-title">Discover Apple ecosystem</h2>
                  <a href="#" className="banner-btn">View more</a>
                </div>
              </div>

              <div className="slider-item">
                <img className="banner-img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/financing-products-og-202006?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1593544210000" alt="banner img 3" />
                <div className="banner-content">
                  <p className="banner-subtitle">Warranty</p>
                  <h2 className="banner-title">Official Apple Warranty</h2>
                  <a href="#" className="banner-btn">Read more</a>
                </div>
              </div>
            </div>
          </div>
    </div>
    )
}