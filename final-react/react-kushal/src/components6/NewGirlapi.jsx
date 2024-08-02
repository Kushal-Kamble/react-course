
import "./Style.css"
const NewGirlapi = (props) => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={props.data["image-url"]}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{props.data.description}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGirlapi;
