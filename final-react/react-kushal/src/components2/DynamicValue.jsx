// Dynamic value in jsx ->  html ke andar javascript likh sakte hai

// hum koi bhi variable add kar sakte hai jsx ki help se with the help of curly bractets  {}

import img from "../images/Kolhapur.jpg";

const DynamicValue = () => {
  const name = "Kushal Kamble";

  const degignation = "Web Developer";

  const returnCrad = () => {
    const kushal = "Testing";
    return kushal;
    // return "I am a Web Developer"
  };
 
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h3 className="card-title">{degignation}</h3>
                <h4>{190 + 10}</h4>
                {/* {name}  is my dyanamic value */}
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <h2>{returnCrad()}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicValue;
