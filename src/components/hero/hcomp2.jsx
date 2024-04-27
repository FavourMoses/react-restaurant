import './hero.css'
const Hcomp2 = ({image,customer,hd,text}) => {
    return (
      <div className="hcomp2parent">
        <div className="imgp">
          <img className="hcp2image" src={image} /> <p>{customer}  <h3 >{hd}</h3></p>
        </div>
       
        <p>{text}</p>
      </div>
    );
}
 
export default Hcomp2;