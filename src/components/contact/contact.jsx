import Nav from "../nav/nav";
import "./contact.css";
import restaurant2 from "../../assets/restaurant.png";
import contacticon from "../../assets/contacticon.png";
import Footer from "../../footer/footer";
const Contact = () => {
    return (
      <div>
        <Nav />
        <div className="contact">
          <div className="text-locate">
            <p className="contact-p">Our Locations</p>
          </div>
        </div>
        <p className="cp">
          <span className="cspan">33 Gana Street, Maitama, Abuja</span> <br />{" "}
          Tel: 09029899978, 09067989402
        </p>
        <div className="cimgdiv">
          <img className="cimg" src={contacticon} alt="call now" />
        </div>
        <div className="opendiv">
          <p className="opening">Opening Hours</p>
          <h5 className="openh">Monday - Friday</h5>
          <p className="openP">7am - 11pm</p>
          <h5 className="openh">Saturday</h5>
          <p className="openP">10am - 11pm</p>
        </div>
        <Footer />
      </div>
    );
}
 
export default Contact;