import PropTypes from "prop-types";
import "./menu.css";
import Product from "./product";

const Mainmenu = ({ data, onAdd }) => {
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        hjvbj
        <p>lol</p>
        {data?.map((product, index) => (
          <Product key={index} products={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};
Mainmenu.propTypes = {
  data: PropTypes.array,
  onAdd: PropTypes.func,
};
export default Mainmenu;
