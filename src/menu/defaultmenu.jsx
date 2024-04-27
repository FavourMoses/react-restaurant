import { useState, useEffect } from "react";
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

const Cart = ({ cart, reducedCart, product }) => {
   const { img, name, price } = product;
  
  return (
    <div className="">
      <h2 className="">Cart</h2>
      <div className="cartdiv">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cartimg" />
            <div>
              <h3 className="">{item.name}</h3>
              <p className="">${item.price}</p>
              <button onClick={() => reducedCart(Products.id)
              }>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Newmenu = () => {
  const [cart, setCart] = useState([]);
  const [carte, setCarte] = useState([]);

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
  // Create a copy of the cart array
  const updatedCart = [...carte, Products];

  // Find the index of the product to be removed
  const indexToRemove = updatedCart.findIndex((Products) => Products.id === id);

  // If the product is found in the cart
  if (indexToRemove !== -1) {
    // Remove the product from the copied cart array
    updatedCart.splice(indexToRemove, 1);

    // Update the state with the new cart array
    setCarte(updatedCart);

    // Update local storage with the new cart array
    localStorage.setItem("carte", JSON.stringify(updatedCart));
  }
};

  

  return (
    <div className=" ">
      <Nav/>
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
          <Cart cart={cart} 
          key={Products.id}
          product={Products}
          reducedCart={reducedCart}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Newmenu;
