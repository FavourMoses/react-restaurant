import "./footer.css";
import { PiCopyrightLight } from "react-icons/pi";
const Footer = () => {
    return ( 
        <div><p className="group">
        SoftEdge <br />
        <span className="group2">Restaurant</span>
      </p>
      <p className="foot">
        <PiCopyrightLight />
        softedgerestaurant.com 2024, All rights reserved
      </p></div>
     );
}
 
export default Footer;