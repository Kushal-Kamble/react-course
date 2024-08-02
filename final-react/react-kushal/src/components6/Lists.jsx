const Lists = (props) => {
    console.log(props);
    return (
      <div className="container" key={props}>
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src={props.data.img_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
                <a href="#" className="btn btn-primary">
                  {props.data.rating}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Lists;
  