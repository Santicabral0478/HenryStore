import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getOrders } from "@/app/dashboard/OrderService";
import { IOrder } from "@/app/dashboard/types";
import { NavBarMobile } from "../NavBarMobile";
import { CategoriesList } from "./CategoriesList";
import "./style.css";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [orders, setOrders] = useState<IOrder[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (token) { 
        const data = await getOrders(token);
        setOrders(data);
      }
      setIsLoading(false);
    };
    fetchOrders();
  }, [token]);

  const handleLogout = ():void => {
    const logOut = window.confirm("Are you sure you want to log out?")
    if(logOut){
      localStorage.removeItem("userToken");
      setToken(null);
      window.location.reload();
    } 
  }; 

  const getTotalProducts = (orders: IOrder[]):number => {
    return orders.reduce((total, order) => {
      return total + order.products.length
    }, 0);
  };

  const totalProducts = getTotalProducts(orders);

  return(
    <div className="NavBar-gral-cont">
      <div className="hm-header"> 
        <div className="sup-gradient"></div>
        <div className="container">
          <div className="header-menu">
            <div className="BurgMenuCart">
              <div className="hm-logo">
                <button className="hm-mobilebutton" onClick={toggleMenu} type="button">
                  <Image 
                    src="/bars.png" 
                    width={20} 
                    height={3} 
                    alt="Menu"
                    style={{filter: "invert(100%)", marginInline: "auto", width: "2rem"}}
                  />
                </button>
                <Image 
                  src="/henry-logo.png" 
                  width={120} 
                  height={120} 
                  alt="Henry Logo"
                  style={{height: "3.5rem", width: "9.5rem" }}
                />
              </div>
              <div className="hm-menu">
                <ul className="hm-ul">
                  <li>
                    <a className="offerLink" href="#">
                      <Image 
                        className="offerStar" 
                        src="/star.png" 
                        width={20} 
                        height={20} 
                        alt="Offers"
                        style={{marginInline: "auto", width: "1.1rem", height: "1rem"}}
                      />
                      <b>Offers</b>
                    </a>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/about`}>
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/products`}>
                      <span>Products</span>
                    </Link>
                  </li>
                </ul>
                <div className="icon-cart">
                  <Link href={`/dashboard`}>
                    <button>
                      <Image 
                        src="/cart.png" 
                        width={27} 
                        height={13} 
                        alt="Shopping Cart"
                        style={{filter: "invert(100%)", marginInline: "auto", width: "2rem", height: "2rem"}} 
                      />
                      <span><b>{totalProducts}</b></span>
                    </button>
                  </Link>
                  {token ? (
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                  ) : (
                    <Link href={`/login`} >
                      <button className="login-button" >Login</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="searchCategory">
              <div className="searchBox">              
                <input className="searchInput" type="text" name="" placeholder="Search something"/>
                <button className="searchButton">
                  <Image 
                    src="/lupa.png" 
                    width={20} 
                    height={20} 
                    alt="Search"
                    style={{filter: "invert(100%)", marginInline: "auto", width: "1rem"}}
                  />
                </button>
              </div>
              <CategoriesList/>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <NavBarMobile onCloseMenu={toggleMenu} />}
    </div>
  )
};

export default NavBar;
