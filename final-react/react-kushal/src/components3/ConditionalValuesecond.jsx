// turnary operator best way to use 


import img from "../images/Kolhapur.jpg";

const ConditionalValuesecond = () => {

    const name = "Kushal Kamble";

    const degignation = "Web Developer"; 

    let age = 18;
  
    const returnCrad = () => {
    //   const kushal = "Testing";
    //   return kushal;
      return "I am a Web Developer"
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
                  <h4>Age : {20 + 5}</h4>
                  {/* {name}  is my dyanamic value */}
                 
                 
                  <a href="#" className="btn btn-primary">
                     {age  >= 18 ? "Watch Now" : "Not Watch"}
                  </a>
                  <h2>{returnCrad()}</h2>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
    </div>
  )
}

export default ConditionalValuesecond
