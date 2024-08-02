import "./Style.css";


const Lists = ({ data }) => {
  const { name, description, img_url, rating, cast, genre, watch_url } = data; // ese Destructuring kehte hai

  const btn_style = {
    backgroundColor: `${rating >= 8.5 ?  "#2ecc71" : "#f39c12"}`
  }
  return (
    <div className="">
      <div className="">
        <div className="grid">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img_url} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <strong>Rating:</strong>
                <span className={`${rating >= 8.5 ? "super_hit" : "average"}`}> {rating} </span>
                 
               
              </p>
              <p className="card-text">
                <strong>Cast:</strong> {cast.join(", ")}
              </p>
              <p className="card-text">
                <strong>Genre:</strong> {genre.join(", ")}
              </p>
              <a
                href={watch_url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={btn_style}
              >
                {" "}
                Watch Now{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
