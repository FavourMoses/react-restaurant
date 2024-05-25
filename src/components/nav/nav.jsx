import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import './nav.css';
import Nav1 from "./nav2";
import BasicModal from "../../menu/modal";
import { useState, useEffect } from "react";


const Nav = () => {
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth < 1024);

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth < 1024);
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  const storedCart = localStorage.getItem("cart");
  const cartArray = storedCart ? JSON.parse(storedCart) : [];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);



  return (
    <div className="container">
      <div className="top">
        <div className="top2">
          <div className="call">
            <FaPhoneAlt />
            <p>+2349029899978,</p>
            <p>+2349067989402</p>
          </div>
          <div className="nav-icon">
            <a
              className="nav-icon"
              href="https://web.facebook.com/favy.aloysius.1/"
            >
              <FaFacebookF />
            </a>
            <a className="nav-icon" href="https://twitter.com/_favy65">
              <RiTwitterXFill />
            </a>
          </div>
        </div>
        <div className="cartitems">
          <PiShoppingCartSimpleFill
            onClick={handleOpen}
            onClose={handleClose}
          />
          {open && <BasicModal />}
          {/* Render BasicModal if open is true */}
          <div className={isLargeScreen ? "large-screen-only" : ""}>
            <p>{cartArray.length} ITEMS</p>
          </div>
        </div>
      </div>
      <Nav1 />
    </div>
  );
};

export default Nav;
