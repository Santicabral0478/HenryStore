import React from "react";
import "./style.css";
import Link from "next/link";

export const Footer:React.FunctionComponent = ()=>{

    return(
        <footer className="footer-gradient">
            <div className="footer-category">
            <div className="container">
              <h2 className="footer-category-title">Products</h2>
              <div className="footer-category-box">
                <h3 className="category-box-title">Devices :</h3>
                <a href="#" className="footer-category-link">iPhone</a>
                <a href="#" className="footer-category-link">iPad</a>
                <a href="#" className="footer-category-link">MacBook</a>
                <a href="#" className="footer-category-link">iMac</a>
                <a href="#" className="footer-category-link">Apple Watch</a>
                <a href="#" className="footer-category-link">Apple TV</a>
                <a href="#" className="footer-category-link">AirPods</a>
              </div>

              <div className="footer-category-box">
                <h3 className="category-box-title">Accessories :</h3>
                <a href="#" className="footer-category-link">Cases & Protection</a>
                <a href="#" className="footer-category-link">Chargers</a>
                <a href="#" className="footer-category-link">Headphones</a>
                <a href="#" className="footer-category-link">Docks</a>
                <a href="#" className="footer-category-link">Cables & Adapters</a>
                <a href="#" className="footer-category-link">Keyboards</a>
                <a href="#" className="footer-category-link">Mice & Trackpads</a>
              </div>

              <div className="footer-category-box">
                <h3 className="category-box-title">Software :</h3>
                <a href="#" className="footer-category-link">macOS</a>
                <a href="#" className="footer-category-link">iOS</a>
                <a href="#" className="footer-category-link">watchOS</a>
                <a href="#" className="footer-category-link">tvOS</a>
              </div>

              <div className="footer-category-box">
                <h3 className="category-box-title">Services :</h3>
                <a href="#" className="footer-category-link">Apple Music</a>
                <a href="#" className="footer-category-link">Apple TV+</a>
                <a href="#" className="footer-category-link">Apple Arcade</a>
                <a href="#" className="footer-category-link">iCloud</a>
                <a href="#" className="footer-category-link">Apple Books</a>
                <a href="#" className="footer-category-link">Apple Pay</a>
                <a href="#" className="footer-category-link">App Store</a>
              </div>

            </div>

    
            </div>
        
            <div className="footer-nav">
        
          <div className="container">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Popular Categories</h2>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">iPhones</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">MacBooks</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">iPads</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Apple Watches</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Apple TV</a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Apple Music</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">AppleCare</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">iCloud</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">App Store</a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">About Apple</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Careers</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Investor Relations</a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">Environment</a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Contact Us</h2>
              </li>
              <li className="footer-nav-item flex">
                <div className="icon-box"></div>
                <address className="content">One Apple Park Way, Cupertino, California, USA</address>
              </li>
              <li className="footer-nav-item flex">
                <div className="icon-box"></div>
                <a href="tel:1-800-MY-APPLE" className="footer-nav-link">1-800-MY-APPLE</a>
              </li>
              <li className="footer-nav-item flex">
                <div className="icon-box"></div>
                <a href="mailto:support@apple.com" className="footer-nav-link">support@apple.com</a>
              </li>
            </ul>
          </div>

        
            </div>
        
            <div className="footer-bottom">
        
              <div className="container">
        
        
                <p className="copyright">
                  Copyright &copy; <Link href="https://www.soyhenry.com">Henry store</Link> all rights reserved.
                </p>
        
              </div>
        
            </div>
    
        </footer>
    )
}