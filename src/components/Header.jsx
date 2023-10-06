import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ heading, description, cImage }) => {
  return (
    <>
      <section>
        <div className="container  mx-auto" id="home">
          <div className="row  m-0 p-0 my-2 w-100  align-items-center">
            <div className="col-md-6 order-md-1 order-2 text-md-left  py-4">
              <h4 className="font-weight-bold">{heading}</h4>
              <div className="description">
                <p className="py-2">{description}</p>
              </div>
              <NavLink to="/create" className="btn btn-custom">
                Create Notes
              </NavLink>
            </div>
            <div
              className="col-md-6 order-md-2 order-1 text-center  py-4"
              id="custom-bg"
            >
              <img src={cImage} className="img-fluid py-4" alt="images" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
