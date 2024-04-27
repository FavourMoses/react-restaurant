import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import "./nav2.css";
import marcoriano from "../../assets/marcoriano.png";
import { IoMdClose } from "react-icons/io";
const Nav1 = () => {
  const navRef = useRef(null);
  const closeRef = useRef(null);
  function revealSidebar() {
    navRef.current.classList.add("navreveal");
  }

  function hideSidebar() {
    navRef.current.classList.remove("navreveal");
  }


  return (
    <div className="parent">

      <nav ref={navRef}>
        <ul className="list">
          <li>
            <IoMdClose onClick={hideSidebar} ref={closeRef} className="mynav" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <div className="div1">
            <img className="l2" src={marcoriano} alt="flower" />
            <div className="words">
              <h3 className="strong">
                <strong>
                  <i>Softedge</i>
                </strong>
              </h3>
              <p className="niger">Restaurant</p>
            </div>
          </div>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <RxHamburgerMenu onClick={revealSidebar} className="burger" />
      </div>
    </div>
  );
};

export default Nav1;
