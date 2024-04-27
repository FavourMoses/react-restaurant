import PropTypes from 'prop-types';
import "./menu.css";
const Basket = (props) => {
    const {cartItems, onAdd, onRemove } = props;
    // order summary
    const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
      <aside className="block col-1">
        <h2>Cart Items </h2>
        <div>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </div>
              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">items price</div>
              <div className="col-1 text-right">${itemsPrice.tofixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Tax price</div>
              <div className="col-1 text-right">${taxPrice.tofixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Shipping price</div>
              <div className="col-1 text-right">${itemsPrice.tofixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total price</strong>
              </div>
              <div className="col-1 text-right">${totalPrice.tofixed(2)}</div>
            </div>
            <hr/>
            <div className="row">
                <button onClick = {()=> alert ('implement checkout')}>Checkout</button>
            </div>
          </>
        )}
      </aside>
    );
}
 Basket.propTypes = {
cartItems: PropTypes.array,
onAdd: PropTypes.func,
onRemove: PropTypes.func,
 }
export default Basket;