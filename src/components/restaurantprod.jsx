/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Products = [
  {
    id: 1,
    img: 'https://picsum.photos/300',
    name: 'Product 1',
    price: 10,
  },
  {
    id: 2,
    img: 'https://picsum.photos/300',
    name: 'Product 2',
    price: 15,
  },
  {
    id: 3,
    img: 'https://picsum.photos/300',
    name: 'Product 3',
    price: 20,
  },
  {
    id: 4,
    img: 'https://picsum.photos/300',
    name: 'Product 4',
    price: 25,
  },
  {
    id: 5,
    img: 'https://picsum.photos/300',
    name: 'Product 5',
    price: 30,
  },
];

const ProductCard = ({ product, addToCart }) => {
  const { img, name, price } = product;

  return (
    <div className='border rounded-sm bg-white p-4'>
      <img src={img} alt={name} />
      <h3 className='my-2 font-bold'>{name}</h3>
      <p className='text-yellow-200'>${price}</p>
      <button
        onClick={() => addToCart(product)}
        className='bg-onblue rounded-lg px-3 p-1 text-white'
      >
        Add to Cart
      </button>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div className='mt-5 bg-white p-4'>
      <h2 className='font-bold mb-2'>Cart</h2>
      <div className='grid grid-cols-4 gap-10 '>
        {cart.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.img} alt={item.name} className='w-full' />
            <div>
              <h3 className='my-2 font-bold'>{item.name}</h3>
              <p className='text-yellow-200'>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Depp = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className=' '>
      <div className='grid grid-cols-4 gap-10 '>
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default Depp;
