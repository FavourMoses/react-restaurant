import './hero.css';
import green from '../../assets/green.png';
const Hcomp = ({head,image, para1,namer}) => {
    return (
      <div className="compcontainer">
        <div className="imgd1">
          <img className="comp_img" src={image} alt="flower" />
        </div>
        <div className="my_imgd2">
          <h3 className="comph">{head}</h3>
          <p className="compp1">{para1}</p>
          <img src={green} alt="green" />
          <img src={green} alt="green" />
          <img src={green} alt="green" />
          <img src={green} alt="green" />
          <img src={green} alt="green" />
          <p className="compname">{namer}</p>
          <a className="atag" href="">
            See Reviews
          </a>
        </div>
      </div>
    );
}
 
export default Hcomp;