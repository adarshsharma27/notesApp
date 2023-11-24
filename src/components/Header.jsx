import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Header = ({ heading, description, cImage }) => {
  return (
    <>
      <section>
        <div className="container  mx-auto" id="home">
          <div className="row  m-0 p-0 my-2 w-100  align-items-center">
            <div className="col-md-6 order-md-1 order-2 text-md-left  py-4">
              <motion.h4
                className="font-weight-bold"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                {heading}
              </motion.h4>
              <div className="description">
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="py-2"
                >
                  {description}
                </motion.p>
              </div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <motion.button
                  className="btn btn-custom"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2bc48a",
                    transition: { type: "spring", stiffness: 500 },
                  }}
                >
                  <NavLink className="text-white" to="/create">
                    Create Notes
                  </NavLink>
                </motion.button>
              </motion.div>
            </div>
            <div
              className="col-md-6 order-md-2 order-1 text-center  py-4"
              id="custom-bg"
            >
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeIn",
                  duration: 1,
                }}
                src={cImage}
                className="img-fluid py-4"
                alt="images"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
