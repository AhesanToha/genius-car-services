import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col g-4 col-md-6 col-lg-4 text-center">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-secondary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
