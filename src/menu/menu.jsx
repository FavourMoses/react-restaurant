import PropTypes from "prop-types";
import { useState } from "react";
import Basket from "./basket";
// import data from "./data";
import { products } from "./data";
import Mainmenu from "./mainmenu";
import "./menu.css";

const Menu = ({ countCartItems }) => {
  // const { products } = data;
  const [cartItems, setCartitems] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
   const [allCart, setCart] = useState([]);

const onAdd = () => {
  let newItem = {
    productName: newName,
    price: newPrice,
  };

  let updatedCartArr = [...allCart, products];
  updatedCartArr.push(newItem);
  setCart(updatedCartArr);
  // this sets the input empty after adding
  setNewPrice("");
  setNewName("");

  localStorage.setItem("productlist", JSON.stringify(updatedCartArr));
};




  // const onAdd = (products) => {
  //   const exist = cartItems.find((x) => x.id === products.id);
  //   // for increase added cart items
  //   if (exist) {
  //     setCartitems(
  //       cartItems.map((x) =>
  //         x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartitems([...cartItems, { ...products, qty: 1 }]);
  //   }
  // };
  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products);
    if (exist.qty) {
      setCartitems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartitems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
 return (
    // countCartItems is for increase of count in the header
    <div className="menuparent">
      <header>
        <div className="mparent">
          <div className="headm">
            <a href="">
              <h1>Small Shopping Cart</h1>
            </a>
          </div>
          <div className="menuA">
            <a href="#/cart">
              Cart{""}
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}
            </a>{" "}
            {""}
            <a href="#/signin">SignIn</a>
          </div>
        </div>
      </header>
      {/* <div className="two">
        <div className="list">
          {/* {products.map((items, index) => (
            <li key={index}> {items.name}</li>
          ))} */}
        {/* </div> */}
        <Mainmenu onAdd={onAdd} data={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
       {/* </div> */}
    </div>
  );
};
Menu.propTypes = {
  countCartItems: PropTypes.array,
};
export default Menu;
