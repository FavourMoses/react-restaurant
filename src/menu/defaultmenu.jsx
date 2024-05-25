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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


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
  {
    id: 2,
    img: burgerfood,
    name: "Big Burger",
    price: 2000,
  },
];



const CartDetails = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);

      const reducedCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
      };
  // alert("fun function");
  return <Cart reducedCart={reducedCart} cart={cart}/>;
};






const ProductCard = ({ product, addToCart }) => {
  
    
    const { img, name, price } = product;
    
    return (
      <div>
      <div className="cartLeft">
        <img
          data-aos="zoom-in"
          data-aos-duration="1200"
          src={img}
          alt={name}
          style={{
            width: "24rem",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            height: "25vh",
            objectFit: "cover",
            borderRadius: "10px",
            marginTop: "5%",
            zIndex: "-1",
            position:"relative",
          }}
        />
        <h3 className="carthead">{name}</h3>
        <p className="">${price}</p>
        <button onClick={() => addToCart(product)} className="cartbtn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};





const Cart = ({ cart, reducedCart }) => {
  // this block is not needed anymore
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === cart.length - 1 ? 0 : prevSlide + 1));
//   };

//   const handlePrevious = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? cart.length - 1 : prevSlide - 1));
//   };

//   return (
//     <div className="mycart">
//       <h2>Cart</h2>
//       <div className="cart-carousel">
//         {cart.map((item, index) => (
//           <div
//             key={index}
//             className={`cart-item ${index === currentSlide ? 'active' : ''}`}
//           >
//             <img src={item.img} alt={item.name} className="cartimg" />
//             <div>
//               <h3 className="">{item.name}</h3>
//               <p className="">${item.price}</p>
//               <button className="remove" onClick={() => reducedCart(item.id)}>
//                 remove
//               </button>
//             </div>
//           </div>
//         ))}
//         <button className="arrow-button previous" onClick={handlePrevious}>
//           &lt;
//         </button>
//         <button className="arrow-button next" onClick={handleNext}>
//           &gt;
//         </button>
//       </div>
//       <button className="checkout" onClick={() => alert("Successful")}>
//         Checkout
//       </button>
//     </div>
//   );
// };







return (
    <div className="mycart">
      <h2 className="">Cart</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {cart.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cart-item">
              <img src={item.img} alt={item.name} className="cartimg" />
              <div>
                <h3 className="">{item.name}</h3>
                <p className="">${item.price}</p>
                <button className="remove" onClick={() => reducedCart(item.id)}>
                  remove
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="checkout" onClick={() => alert("Successful")}>
        Checkout
      </button>
    </div>
  );
};









  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // return (
  //   <div className="mycart">
  //     <h2 className="">Cart</h2>
  //     <div className="cartdiv">
  //       <Slider {...settings}>
  //         {cart.map((item, index) => (
  //           <div key={index} className="cart-item">
  //             <img src={item.img} alt={item.name} className="cartimg" />
  //             <div>
  //               <h3 className="">{item.name}</h3>
  //               <p className="">${item.price}</p>
  //               <button className="remove" onClick={() => reducedCart(item.id)}>
  //                 Remove
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //     <button className="checkout" onClick={() => alert("Successful")}>
  //       Checkout
  //     </button>
  //   </div>
  // );
// };





  // const Cart = ({cart, reducedCart}) => {
  //   return (
  //     <div className="mycart">
  //       <h2 className="">Cart</h2>
  //       <div className="cartdiv">
  //         {cart.map((item, index) => (
  //           <div key={index} className="cart-item">
  //             <img src={item.img} alt={item.name} className="cartimg" />
  //             <div>
  //               <h3 className="">{item.name}</h3>
  //               <p className="">${item.price}</p>
  //               <button className="remove" onClick={() => reducedCart(item.id)}>
  //                 remove
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <button className="checkout" onClick={() => alert("Successful")}>
  //         Checkout
  //       </button>
  //     </div>
  //   );
  // };

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





  
  
  // const Cart = () => {
    
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
          <Cart reducedCart={reducedCart} cart={cart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};









export {Newmenu, CartDetails};