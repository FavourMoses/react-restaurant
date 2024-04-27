import PropTypes from "prop-types";
import { useState } from "react";
import "./menu.css";
const Product = ({ products }) => {
  //  const [cartItems, setCartitems] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  //  const [allCart, setCart] = useState([]);

  // let newItem = {
  //   productName: newName,
  //   price: newPrice,
  // };

  // let updatedCartArr = [newItem];

  let items = [];
  // let items = [];
  const newItem = {
    productName: products.name,
    price: products.price,
  };

  const onAdd = () => {
    items.push(newItem);
    localStorage.setItem("prod", JSON.stringify(items));
  };

  return (
    <div>
      <img className="small" src={products.image} alt="name"></img>
      <h3>{products.name}</h3>
      <div>${products.price}</div>
      <div>
        <button
          onClick={() => {
            onAdd()
            // localStorage.setItem("products", JSON.stringify(products));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
Product.propTypes = {
  products: PropTypes.array,
  onAdd: PropTypes.func,
};
export default Product;

// export default function Product(props){
//     const  {product} = props;
// return(
//     <div>
//         <img className="small" src={product.image} alt={product.name}></img>
//         <h3>{product.name}</h3>
//         <div>${product.price}</div>
//         <div>
//             <button>Add to Cart</button>
//         </div>
//     </div>
// )}
