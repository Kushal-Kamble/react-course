// import React from 'react'

// you can return a jsx or can use ternary operator for conditional in jsx

// use of ternary operator

// in javascript every thing is object and in react every thing is components 
import img from "../images/Kolhapur.jpg";


const ConditionalValuein = () => {
    const name = "Kushal Kamble";

    const degignation = "Web Developer";

    let age = 16;
  
    const returnCrad = () => {
      const kushal = "Testing";
      return kushal;
      // return "I am a Web Developer"
    };


    if(age <  10){
        return <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h3 className="card-title">{degignation}</h3>
            <h4>{190 + 10}</h4>
            {/* {name}  is my dyanamic value */}
           
            <a href="#" className="btn btn-primary">
               Not Watch 
            </a>
            
            <h2>{returnCrad()}</h2>
          </div>
        </div>
      </div>
    }


  
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
                 
                 
                  <a href="#" className="btn btn-warning ms-3">
                     Watch Now
                  </a>
                  <h2>{returnCrad()}</h2>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default ConditionalValuein
