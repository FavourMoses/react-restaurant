/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import burgerfood from "./../assets/burgerfood.png";
import chickenEtChips from "./../assets/chickenEtChips.png";
import pizza from "./../assets/pizza.png";
import rice from "./../assets/rice.png";
import shawarma from "./../assets/shawarma.png";
import spaghetti from "./../assets/spaghetti.png";
import yampeppersoup from "./../assets/yampeppersoup.png";
import chocolate from "./../assets/chocolate.png";
import Nav from "../components/nav/nav";
import "./menu.css";
import Footer from "../footer/footer";
const Products = [
  {
    id: 1,
    img: burgerfood,
    name: "Burger",
    price: 1000,
  },
  {
    id: 2,
    img: chickenEtChips,
    name: "Chicken and chips",
    price: 1500,
  },
  {
    id: 3,
    img: pizza,
    name: "Pizza",
    price: 2000,
  },
  {
    id: 4,
    img: rice,
    name: "Naija Jellof",
    price: 2500,
  },
  {
    id: 5,
    img: shawarma,
    name: "Shawarma",
    price: 1500,
  },
  {
    id: 6,
    img: spaghetti,
    name: "Spaghetti",
    price: 3000,
  },
  {
    id: 7,
    img: yampeppersoup,
    name: "yampepper soup",
    price: 3000,
  },
  {
    id: 8,
    img: chocolate,
    name: "chocolate",
    price: 3000,
  },
];

const ProductCard = ({ product, addToCart }) => {
  //   const [allTodos, setTodos] = useState([]);

  // const handleDeleteTodo = (id) => {
  //   let reducedTodo = [...allTodos];
  //   reducedTodo.splice(id, 1);

  //  localStorage.setItem("cart", JSON.stringify(updatedCart));

  //   localStorage.setItem("todolist", JSON.stringify(reducedTodo));
  //   setTodos(reducedTodo);
  // };

  const { img, name, price } = product;

  return (
    <div className="cartLeft">
      <img
        data-aos="zoom-in"
        data-aos-duration="1200"
        src={img}
        alt={name}
        style={{
          width: "100%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          height: "20vh",
          objectFit: "cover",
        }}
      />
      <h3 className="carthead">{name}</h3>
      <p className="">${price}</p>
      <button onClick={() => addToCart(product)} className="cartbtn">
        Add to Cart
      </button>
    </div>
  );
};

const Newmenu = () => {
  // const storedCart = localStorage.getItem("cart");
  // const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const reducedCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const Cart = () => {
    return (
      <div className="">
        <h2 className="">Cart</h2>
        <div className="cartdiv">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cartimg" />
              <div>
                <h3 className="">{item.name}</h3>
                <p className="">${item.price}</p>
                <button className="remove" onClick={() => reducedCart(item.id)}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="checkout" onClick={() => alert("Successful")}>Checkout</button>
      </div>
    );
  };

  return (
    <div className=" ">
      <Nav />
      <div className="flexcontainer">
        <div className="grid">
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className="cart">
         
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newmenu;
