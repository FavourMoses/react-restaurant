import './hero.css'
const Hcomp2 = ({image,customer,hd,text}) => {
    return (
      <div className="hcomp2parent">
        <div className="imgp">
          <img className="hcp2image" src={image} />
          <div className="customer_p">
            <p>{customer}</p>
            <h3>{hd}</h3>
          </div>
        </div>

        
          <p className='t'>{text}</p>
        </div>
      
    );
}
 
export default Hcomp2;