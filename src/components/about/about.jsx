import Nav from "../nav/nav";
import "./about.css";
import aboutpix from "../../assets/aboutpix.png";
import Footer from "../../footer/footer";
import restaurant from "../../assets/restaurant.png";
const About = () => {
  return (
    <div>
      <Nav />
      <div className="abcontainer">
        <div className="ab-cont">
        <div>
          <p className="abp1"> About Us</p>
          <p className="abp2">
            Whether you fancy a real seasonal cuisine , drink a homemade
            cocktail , or participate in one of our many evenings, there is
            bound to be something for you at SoftEdge. We strive to exceed
            expectations at every turn, ensuring that each visit leaves a
            lasting impression.
          </p>
          <a href="./menu">
            <button className="abplace">Place Your Order</button>
          </a>
          <a href="./contact">
            <button className="abplace2">Contact Us</button>
          </a>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="abimg"
          src={aboutpix}
          alt="waiter"
        />
        </div>
        <div className="abdiv2">
          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="abimg"
              src={restaurant}
              alt="environment"
            />
          </div>
          <div>
            <p className="story">Our Story</p>
            <p className="abp1">Where It All Began</p>
            <p className="abp3">
              A City’s favorite since opening its doors in 2014, SoftEdge Abuja
              restaurant is known in the FCT for its innovative, tempting
              cuisine and outstanding Chefs. SoftEdge is a lively, bustling
              place, often engolved with activities. Almost always at the
              restaurant, our Chefs remains as busily involved in the daily
              operations to merge each day as a unique experience for all
              customers.
            </p>
          </div>
        </div>
        <div className="abutton">
          <h4>100% Organic</h4>
          <h4>Ethically Sourced Ingredients</h4>
          <h4>Fresh & Innovative</h4>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
