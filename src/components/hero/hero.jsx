import Nav from "../nav/nav";
import img2 from "../../assets/img2.jpg";
import plate from "../../assets/plate.png";
import { IoIosArrowDropdown } from "react-icons/io";
import restaurant from "../../assets/restaurant.png";
import "./hero.css";
import Hcomp from "./herocomp";
import green from "../../assets/green.png";
import range from "../../assets/range.png";
import Hcomp2 from "./hcomp2";
import womandog from "../../assets/womandog.png";
import couple from "../../assets/couple.png";
import man from "../../assets/man.png";
import Footer from "../../footer/footer";
import restaurant2 from "../../assets/restaurant2.png";
import customer from "../../assets/customer.png";
const Hero = () => {
  return (
    <div>
      <Nav />
      <img className="l3" src={img2} alt="flower" />
      <div className="overlay">
        <p className="firstp">SoftEdge Restaurant</p>
        <p className="firstp2">Only Quality Food</p>
        <p className="firstp3">Experience the taste of Africa</p>
        <button className="btnPlace">Place Your Order</button>
        <div className="arrow">
          <IoIosArrowDropdown />
        </div>
      </div>
      <div>
        <p className="welcomeh">Welcome To SoftEdge </p>
        <p className="welcomep">
          We aim to do more than simply bringing delicious food from your
          preferred restaurant. <br />
          Our focus lies in establishing connections. That &apos;s why we
          collaborate closely with chefs <br />
          to craft menus bursting with freshness and flavor. Give us a try!
        </p>
        <img className="welomeImg" src={plate} alt="plate" />
        <p className="welcomeh">We Will Deliver To Your Doorstep </p>
      </div>
      <div className="compdiv">
        <p className="Reasonsh">Top 3 Reasons To Eat Here</p>
        <div
          data-aos="zoom-in"
          // data-aos-easing="ease-in-back"
          // data-aos-delay="0"
          // data-aos-offset="0"
          data-aos-duration="1200"
          className="compd"
        >
          <Hcomp
            head="1. Exquisite Atmosphere"
            image={restaurant}
            para1="Exceptional atmosphere paired with delectable cuisine, impeccably presented."
            namer="Ngozi Chukwuemeka"
          />
          <Hcomp
            head="2. Incredible Cuisine"
            image={restaurant2}
            para1="Exceptional cuisine, expertly prepared."
            namer="Thomas Peter"
          />
          <Hcomp
            head="3. Outstanding Customer Care"
            image={customer}
            para1="Staff were nice and welcoming. Service was good as well"
            namer="Chioma Nancy"
          />
        </div>
      </div>
      <a href="./menu">
        <button className="see">See menu</button>
      </a>
      <div className="parenta">
        <div className="parentaD1">
          <p className="parentap1">Reviews</p>
          <p className="parentap2">
            4.0
            {""} <img src={green} alt="green" />
            <img src={green} alt="green" />
            <img src={green} alt="green" />
            <img src={green} alt="green" />
            <img src={green} alt="green" />
          </p>
          <img src={range} alt="review" />
        </div>
        <div className="verifydiv">
          <p className="verified">Verified Customers Reviews</p>
          <Hcomp2
            image={womandog}
            customer="David Micheal"
            hd="We enjoyed a nice meal"
            text="
I went here for dinner a couple of days ago on a very busy Saturday night. 
At the time I thought it was ok, but a bit ordinary. Much better visit this time, 
a slightly odd mixture of different cuisines like many restaurants in Abuja. 
We shared a caprese salad which was pretty well done. For mains a lasagna and chicken tacos, 
both well done and both enjoyed. A nice terrace outside, but still the rainy season, so we sat inside. 
Service was happy, and unusually for Abuja done promptly without being rushed. We enjoyed a nice meal"
          />

          <Hcomp2
            image={couple}
            customer="Clement Azu"
            hd="Just Amazing"
            text="
SoftEdge is great. I can’t get enough of the Espetadas and the mozzarella sticks. It’s my go to when
 I have some left over work. Their delivery service too is simply top notch. Highly recommend."
          />

          <Hcomp2
            image={man}
            customer="Nwachukwu Isibor"
            hd="Romantic and Cozy"
            text="The atmosphere is friendly and well spaced out, the new terrace area is very romantic,
 with soft music over weekends. Pricing very fair, menu variety is good, and delivery space is swift.
  Please replace globes in the rope light that is not working. Thank you and keep it up. We attended a business
 dinner and later a private dinner. This indoor section still looks cozy and busy"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hero;
